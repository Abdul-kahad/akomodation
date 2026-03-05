import Axios from 'axios'
import { useEffect, useState } from 'react'
import SideNaveBar from '../../Components/SideNaveBar/SideNaveBar'
import classes from './ManageUsers.module.css'
import { Link } from 'react-router-dom'

const ManageUsers = () => {
  const [users, setUsers] = useState([])
  const [serverMSG, setServerMSG] = useState('')
  const [sideBarOpen, setSideBarOpen] = useState(true)

  const toggleSideBar = () => {
    setSideBarOpen(prevState => !prevState)
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/api/admin/users', {
          headers:{
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setUsers(response.data)
        // console.log(response.data)
      } catch (error) {
        setServerMSG(error.response.data.message || 'Failed to fetch users')
      }}
      fetchUsers()
    },[])
    
    const deleteHandler = async (userId) => {
      const confirmDelete = window.confirm('Are you sure you want to delete this user?')
          if(!confirmDelete) return
      try {
        await Axios.delete(`http://localhost:3000/api/admin/users/${userId}`, {
          headers:{
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setUsers(users.filter(user => user._id !== userId))
      } catch (error) {
        setServerMSG(error.response.data.message || 'Failed to delete user')
      }
    }

    const SuspendHandler = async (userId) => {
      const user = users.find(user => user._id === userId)
      const action = user.suspended ? 'false' : 'true'

      try {
        const response = await Axios.put(`http://localhost:3000/api/admin/users/${userId}/${action}`, {}, {
          headers:{
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setUsers(users.map(user => user._id === userId ? {...user, suspended: !user.suspended} : user))
      } catch (error) {
        setServerMSG(error.response.data.message || 'Failed to suspend user')
      }
    }

  return (
    <div className={classes.Users}>
      <div className={classes.Container}>
        <SideNaveBar isOpen={sideBarOpen} />
        <div className={classes.MainWindow}>
          <div className={classes.Header}>
            <i className="fas fa-bars" onClick={toggleSideBar}></i>
            <div className={classes.wrapper}>
              <i className="fas fa-bell" style={{fontSize: '1rem'}}></i>
              <i className="fas fa-envelope" style={{fontSize: '1rem'}}></i>
              <i className="fas fa-user" style={{fontSize: '1rem'}}></i>
            </div>
          </div>
          <div className={classes.Content}>
            <span>
              <p><strong>Manage Users</strong></p>
              <Link to="/"><small>Home <i className="fas fa-home"></i></small></Link>
            </span>
              
            <div className={classes.tableContainer}>
              <table>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>User Name</th>
                          <th>Role</th>
                          <th>Status</th>
                          <th>Edit</th>
                      </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                        <td><span className={`${classes.status} ${user.suspended ? classes.suspended : classes.active}`}>{user.suspended ? 'Suspended' : 'Active'}</span></td>
                        <th className={classes.editItems}>
                          <i className='fas fa-pen'></i>
                          <i className='fas fa-pause-circle' onClick={() => SuspendHandler(user._id)}></i>
                          <i className='fas fa-trash' onClick={() => deleteHandler(user._id)}></i>
                        </th>
                      </tr>
                    ))}
                  </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageUsers
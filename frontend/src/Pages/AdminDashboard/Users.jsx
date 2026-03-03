import Axios from 'axios'
import { useEffect, useState } from 'react'
import SideNaveBar from '../../Components/SideNaveBar/SideNaveBar'
import classes from './Users.module.css'
import { Link } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])
  const [serverMSG, setServerMSG] = useState('')

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

  return (
    <div className={classes.Users}>
      <div className={classes.Container}>
        <SideNaveBar />
        <div className={classes.MainWindow}>
          <div className={classes.Header}>
            <button className={classes.toggleSidenave}><i className="fas fa-bars"></i></button>
            <div className={classes.wrapper}>
              <i className="fas fa-bell" style={{fontSize: '1rem'}}></i>
              <i className="fas fa-envelope" style={{fontSize: '1rem'}}></i>
              <i className="fas fa-user" style={{fontSize: '1rem'}}></i>
            </div>
          </div>
          <div className={classes.Content}>
            <span>
              <p><strong>Current System Users</strong></p>
              <Link to="/"><small>Home <i className="fas fa-home"></i></small></Link>
            </span>
              
            <div className={classes.tableContainer}>
              <table>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>User Name</th>
                          <th>Email Address</th>
                          <th>Role</th>
                          <th>Status</th>
                      </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td><span className={`${classes.status} ${user.suspended ? classes.suspended : classes.active}`}>{user.suspended ? 'Suspended' : 'Active'}</span></td>
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

export default Users
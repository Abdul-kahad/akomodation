import Axios from 'axios'
import { useEffect, useState } from 'react'
import classes from './AdminDashboard.module.css'

const AdminDashboard = () => {
  const [users, setUsers] = useState([])
  const [serverMSG, setServerMSG] = useState('')
  const [toggle, setToggle] = useState(false)

    const toggleMenuHandler = (userId) => {
      setToggle(userId)
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
    <div className={classes.AdminDashboard}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <h2>ADMIN DASHBOARD</h2>
        </div>
        <div className={classes.Group}>
          {users.map((user) => (
              <div  key={user._id} className={classes.Card}>
                <div onClick={() => toggleMenuHandler(user._id)} className={classes.Menu} >
                  . <br />. <br />.
                </div>
                {toggle === user._id && 
                  <div  className={classes.Options}>
                    <ul className={classes.OptionsList}>
                      <li onClick={() => SuspendHandler(user._id)}>{user.suspended ? 'Unsuspend' : 'Suspend'}</li>
                      <li style={{color: 'red'}} onClick={() => deleteHandler(user._id)}>Delete User</li>
                      <li onClick={() => setToggle('')}>
                        <button>Close</button>
                      </li>
                    </ul>
                  </div>}
                <img className={classes.CardImg}/>
                <div onClick={()=>setToggle('')} className={classes.CardBody}>
                  <h3>{user.name}</h3>
                  <p>User id: {user._id}</p>
                  <p>Email: {user.email}</p>
                  <p>Role: {user.role}</p>
                  <p>Status: {user.suspended ? 'Suspended' : 'Active'}</p>
                </div>
              </div>
          )) 
          }

        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
import Axios from 'axios'
import { useEffect, useState } from 'react'
import classes from './AdminDashboard.module.css'

const AdminDashboard = () => {
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
    <div className={classes.AdminDashboard}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <h2>ADMIN DASHBOARD</h2>
        </div>
        <div className={classes.Group}>
          {users.map((user) => (
              <div key={user._id} className={classes.Card}>
                <div onClick className={classes.Menu} >
                  . <br />. <br />.
                </div>
                <img className={classes.CardImg}/>
                <div className={classes.CardBody}>
                  <h3>{user.name}</h3>
                  <p>User id: {user._id}</p>
                  <p>Email: {user.email}</p>
                  <p>Role: {user.role}</p>
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
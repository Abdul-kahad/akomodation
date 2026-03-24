import Axios from 'axios'
import { useEffect, useState } from 'react'
import SideNaveBar from '../../Components/SideNaveBar/SideNaveBar'
import classes from './Tenants.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Tenants = () => {
  const [tenants, setTenants] = useState([])
  const [serverMSG, setServerMSG] = useState('')
  const [sideBarOpen, setSideBarOpen] = useState(true)
  const navigate = useNavigate()

  const toggleSideBar = () => {
    setSideBarOpen(prevState => !prevState)
  }

  useEffect(() => {
    const fetchTenants = async () => { 
      try {
        const response = await Axios.get('http://localhost:3000/api/moderator/dashboard', {
          headers:{
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setTenants(response.data)
        // console.log(response.data)
      } catch (error) {
        setServerMSG(error.response.data.message || 'Failed to fetch users')
      }}
      fetchTenants()
    },[])


const deleteHandler = async(roomId) => {
            try {
              const confirmDelete = window.confirm('Are you sure you want to delete this room?')
              if(!confirmDelete) return
              const response = await Axios.delete(`http://localhost:3000/api/moderator/rooms/${roomId}`, {
                  headers:{
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                  }})
              setServerMSG(response.data.message)
              alert(response.data.message)
            } catch (error) {
              setServerMSG(error?.message)
              console.log(`an error occured: ${error}`)
            }
          }
  return (
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
              <p><strong>My Tenants</strong></p>
              <Link to="/"><small>Home <i className="fas fa-home"></i></small></Link>
            </span>
              
            <div className={classes.tableContainer}>
              <table>
                  <thead>
                      <tr>
                        <th>Room Image</th>
                        <th>Tenant ID</th>
                        <th>Tenant Room</th>
                      </tr>
                  </thead>
                  <tbody>
                    {tenants.map(tenant => (
                      <tr key={tenant._id}>
                        <td><img className={classes.smallImage} src={tenant.roomImage} alt={tenant.roomTitle} /></td>
                        <td>{tenant._id}</td>
                        <td>{tenant.roomTitle}</td>
                      </tr>
                    ))}
                  </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Tenants
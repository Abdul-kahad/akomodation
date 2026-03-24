import Axios from 'axios'
import { useEffect, useState } from 'react'
import SideNaveBar from '../../Components/SideNaveBar/SideNaveBar'
import classes from './Rooms.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [serverMSG, setServerMSG] = useState('')
  const [sideBarOpen, setSideBarOpen] = useState(true)
  const navigate = useNavigate()

  const toggleSideBar = () => {
    setSideBarOpen(prevState => !prevState)
  }

  useEffect(() => {
    const fetchRooms = async () => { 
      try {
        const response = await Axios.get('http://localhost:3000/api/moderator/dashboard', {
          headers:{
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setRooms(response.data)
        // console.log(response.data)
      } catch (error) {
        setServerMSG(error.response.data.message || 'Failed to fetch users')
      }}
      fetchRooms()
    },[rooms])


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
              <p><strong>My Rooms</strong></p>
              <Link to="/"><small>Home <i className="fas fa-home"></i></small></Link>
            </span>
              
            <div className={classes.tableContainer}>
              <table>
                  <thead>
                      <tr>
                          <th>Image</th>
                          <th>Room Title</th>
                          <th>Tenant</th>
                          <th>Status</th>
                          <th>Edit</th>
                      </tr>
                  </thead>
                  <tbody>
                    {rooms.map(room => (
                      <tr key={room._id}>
                        <td><img className={classes.smallImage} src={room.roomImage} alt={room.roomTitle} /></td>
                        <td>{room.roomTitle}</td>
                        <td>{room.tenant}</td>
                        <td><span className={`${classes.status} ${room.booked ? classes.suspended : classes.active}`}>{room.booked ? 'Booked' : 'Available'}</span></td>
                        <td className={classes.editItems}>
                          <i className='fas fa-pen' onClick={() => navigate(`/update/updateroom/${room._id}`)}></i>
                          <i className='fas fa-trash' onClick={() => deleteHandler(room._id)}></i>
                        </td>
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

export default Rooms
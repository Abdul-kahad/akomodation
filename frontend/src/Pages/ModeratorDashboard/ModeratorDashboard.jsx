import Axios from 'axios'
import { useEffect, useState } from 'react'
import classes from './ModeratorDashboard.module.css'
import { useNavigate } from 'react-router-dom'


const ModeratorDashboard = () => {
  const [rooms, setRooms] = useState([])
  const [serverMSG, setServerMSG] = useState('')
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
 
  useEffect(() => {
    const fetchRooms = async() => {

      const response = await Axios.get('http://localhost:3000/api/moderator/dashboard', {
        headers:{
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setRooms(response.data)
      setServerMSG(response.data.message)} 
    fetchRooms()
  },[rooms])

   const toggleMenuHandler = () => {
    setToggle(prev => !prev)
  }

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
    <div className={classes.ModeratorDashboard}>
       <div className={classes.Container}>
        <div className={classes.Header}>
          <h2>MODERATORS DASHBOARD</h2>
        </div>
        <div className={classes.RoomsContainer}>
          { rooms.length > 0 ? rooms.map(room => 
          <div key={room._id} className={classes.RoomCard}>
            <div onClick={toggleMenuHandler} className={classes.Menu} >
              . <br />. <br />.
            </div>
            {toggle && 
              <div onClick={toggleMenuHandler} className={classes.Options}>
                <ul className={classes.OptionsList}>
                  <li onClick={() => navigate(`/update/updateroom/${room._id}`)}>Edit</li>
                  <li onClick={() => deleteHandler(room._id)}>Delete</li>
                </ul>
              </div>}
            <div className={classes.ImgContainer}>
              <img />
            </div>
            <div className={classes.RoomDetails}>
              <h3>{room.roomTitle}</h3>
              <p>{room.roomDescription}</p>
              <p>Location: {room.roomLocation}</p>
              <p>Price: ${room.roomPrice}</p>
              <p>Quantity: {room.roomQuantity}</p>
              <p>Status: {room.booked ? "Booked" : "Available"}</p>
            </div>
          </div>) : <h3>{serverMSG}</h3>}
        </div>
       </div>
    </div>
  )
}

export default ModeratorDashboard
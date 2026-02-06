import Axios from 'axios'
import { useEffect, useState } from 'react'
import classes from './ModeratorDashboard.module.css'

const ModeratorDashboard = () => {
  const [rooms, setRooms] = useState([])
  const [serverMSG, setServerMSG] = useState('')

  useEffect(() => {
    const fetchRooms = async() => {

      const response = await Axios.get('http://localhost:3000/api/moderator/dashboard', {
        headers:{
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setRooms(response.data)
      // console.log(response.data.message)
      setServerMSG(response.data.message)
    } 
    // if(rooms.length === 0){
    //   console.log('rooms.length', rooms.length)
    //     setServerMSG('You have no rooms yet')
    //   }
    fetchRooms()
  },[])
  
  return (
    <div className={classes.ModeratorDashboard}>
      <p>{serverMSG}</p>
       <div className={classes.Container}>
        <div className={classes.Header}>
          <h2>MODERATORS DASHBOARD</h2>
        </div>
        <div className={classes.RoomsContainer}>
          {rooms.map(room => 
          <div key={room._id} className={classes.RoomCard}>
            <div className={classes.Menu}>
              . <br />. <br />.
            </div>
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
          </div>)}
        </div>
       </div>
    </div>
  )
}

export default ModeratorDashboard
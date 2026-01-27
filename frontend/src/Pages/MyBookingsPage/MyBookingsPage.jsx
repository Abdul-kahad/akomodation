import Axios from 'axios'
import { useState, useEffect } from 'react'
import classes from './MyBookingsPage.module.css'

const MyBookingsPage = () => {
  const [room, setRoom] = useState([])
  const [serverMSG, setServerMSG] = useState('')

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await Axios.get(`http://localhost:3000/api/user/bookedrooms`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setRoom(response.data)
      console.log(response.data)
      setServerMSG(response.data.message)
    }
    fetchRoom()
  },[])
  return (
    <div className={classes.container}>
      <h1>My Room</h1>
      {serverMSG && <p className={classes.serverMSG}>{serverMSG}</p>}
      {room.map(room => (
        <div className={classes.roomBox} key={room._id}>
          <img className={classes.roomImage} alt={room.roomTitle} />
          <div className={classes.roomInfo}>
            <h3>{room.roomTitle}</h3>
            <p><strong>Description:</strong> {room.roomDescription}</p>
            <p><strong>Location:</strong> {room.roomLocation}</p>
            <p><strong>Price:</strong> ${room.roomPrice}</p>
            <p><strong>Quantity:</strong> {room.roomQuantity}</p>
            <p><strong>Status:</strong> {room.booked ? "Booked" : "Available"}</p>
          </div>
        </div>))}
    </div>
  )
}

export default MyBookingsPage
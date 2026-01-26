import Axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import classes from './ViewRoomPage.module.css'

const ViewRoomPage = () => {
  const {roomId} = useParams()
  const [room, setRoom] = useState({})
  const [serverMSG, setServerMSG] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchRoomDetails = async () => {
      const response = await Axios.get(`http://localhost:3000/rooms/${roomId}`)
      setRoom(response.data)
    }
    fetchRoomDetails()
  },[roomId])

const BookRoomHandler = async () => {
  try {
    const response = await Axios.put(`http://localhost:3000/api/user/bookroom/${roomId}`,{},{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    setServerMSG(response.data.message)
    alert(response.data.message)
    navigate(`/mybookings`)
  } catch (error) {
    console.log('An error occured:', error)
    alert(error.response.data.message)
  }
}


  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Room Details</h2>
      </div>
      <div className={classes.roomBox}>
        <img className={classes.roomImage} src={room.roomImage} alt={room.roomTitle} />
        <div className={classes.roomInfo}>
          <h3>{room.roomTitle}</h3>
          <p><strong>Description:</strong> {room.roomDescription}</p>
          <p><strong>Location:</strong> {room.roomLocation}</p>
          <p><strong>Price:</strong> ${room.roomPrice}</p>
          <p><strong>Quantity:</strong> {room.roomQuantity}</p>
          <p><strong>Status:</strong> {room.booked ? "Booked" : "Available"}</p>
          <button className={classes.Button} onClick={BookRoomHandler}>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default ViewRoomPage
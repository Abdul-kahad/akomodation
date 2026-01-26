import Axios from 'axios'
import classes from './MyBookingsPage.module.css'
import { useState, useEffect } from 'react'
import RoomCard from '../../Components/Rooms/RoomCard/RoomCard'

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
        <RoomCard 
        key={room._id}
        roomTitle={room.roomTitle} 
        roomImage={room.roomImage} 
        roomDescription={room.roomDescription} 
        roomLocation={room.roomLocation} 
        roomPrice={room.roomPrice}
        booked={room.booked} />))}
    </div>
  )
}

export default MyBookingsPage
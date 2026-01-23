import RoomCard from './RoomCard/RoomCard'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import classes from './Rooms.module.css'

const Rooms = () => {
  const navigate = useNavigate()
  const [ rooms, setRooms ] = useState([])
  const [ serverMSG, setServerMSG ] = useState('') 

  const getRoomsHandler = async () =>{
  try {
    const response = await Axios.get('http://localhost:3000/')
    setRooms(response.data.rooms)
  } catch (error) {
    console.log(`An error occure: ${error}`)
    setServerMSG('Failed to fetch rooms')
  }
}
  useEffect(() => { getRoomsHandler() }, [])

  if (rooms.length === 0) {
    return <h2>{serverMSG || 'No rooms available'}</h2>
  }
  return(
     <div className={classes.Rooms}>
      <div className={classes.RoomsContainer}>
        <div className={classes.RoomsHeader}>
          <h2>Browse Rooms</h2>
        </div>
        <div className={classes.RoomsGrid}>
          {rooms.map( room => (
            <RoomCard 
              clicked={() => {navigate(`/viewroom/${room._id}`)}}
              key={room._id}
              roomTitle = {room.roomTitle}
              roomDescription = {room.roomDescription}
              roomLocation = {room.roomLocation}
              roomPrice = {room.roomPrice}
              roomQuantity = {room.roomQuantity}
              booked = {room.booked}/>
          ))}
        </div>
      </div>
    </div> 
  )
}
export default Rooms
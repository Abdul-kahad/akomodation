import RoomCard from './RoomCard/RoomCard'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import classes from './Rooms.module.css'

const [ rooms, setRooms ] = useState([])
const [ serverMSG, setServerMSG ] = useState('') 

const getRoomsHandler = () =>{
  try {
    const response = Axios.get('http://localhost:3000/')
    setRooms(response.data)
    setServerMSG(response.message)
  } catch (error) {
    console.log(`An error occure: ${error}`)
    throw new Error(error)
  }
}

const Rooms = () => {
  useEffect(getRoomsHandler, [])
  return(
    (!rooms) ? <h2>{serverMSG}</h2> :
     <div className={classes.Rooms}>
      <div className={classes.RoomsContainer}>
        <div className={classes.RoomsHeader}>
          <h2>Browse Rooms</h2>
        </div>
        <div className={classes.RoomsGrid}>
          {rooms.map( room => (
            <RoomCard 
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
import Axios from 'axios'
import { useEffect, useState } from 'react'
import RoomCard from '../../Components/Rooms/RoomCard/RoomCard'
import classes from './ProfilePage.module.css'

const ProfilePage = () => {
  const [user, setUser] = useState({})
  const [room, setRoom] = useState({})
  const [serverMSG, setServerMSG] = useState()

  useEffect(() => {
    const getUser = async() =>{
      const response = await Axios.get('http://localhost:3000/api/user/profile',{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setUser(response.data)
    }
    getUser()
    
    const fetchRoom = async () => {
      const response = await Axios.get(`http://localhost:3000/api/user/bookedrooms`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setRoom(response.data[0])
      setServerMSG(response.data.message)
    }
    fetchRoom()
  },[])

  console.log(room)

  return (
    <div className={classes.container}>
      <div className={classes.SideNav}>
        
      </div>

        <div className={classes.ProfileContent}> 
          <div className={classes.User}>
            <div className={classes.ProfileImages}>
              <img className={classes.CoverPhoto} />
              <img className={classes.ProfilePhoto} />
            </div>
            <div className={classes.userDetails}>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
            </div>
          </div>
          <div className={classes.UserBookings}>
            <h2>My Room</h2>
            {serverMSG ?? <p>{serverMSG}</p>}
            <RoomCard 
              roomTitle = {room.roomTitle}
              roomDescription = {room.roomDescription}
              roomLocation = {room.roomLocation}
              roomPrice = {room.roomPrice}
              roomQuantity = {room.roomQuantity}
              booked = {room.booked}/>
          </div>
        </div>

        <div className={classes.userMenu}></div>
      </div>
  )
}

export default ProfilePage
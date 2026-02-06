import Axios from 'axios'
import { useEffect, useState } from 'react'
import RoomCard from '../../Components/Rooms/RoomCard/RoomCard'
import classes from './ProfilePage.module.css'

const ProfilePage = () => {
  const [user, setUser] = useState({})
  const [room, setRoom] = useState([])
  const [serverMSG, setServerMSG] = useState('')

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
    
    const fetchRoom = async() => {
      try {
        const response = await Axios.get(`http://localhost:3000/api/user/bookedrooms`,{
          headers:{
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setRoom(response.data)
      } catch (error) {
        setServerMSG(error.response?.data?.message || 'Error fetching booked room')
        console.error('Error fetching booked room:', error)
      }
    }
    fetchRoom()
  },[])

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
            {room.length > 0 ? <RoomCard 
              roomTitle = {room[0].roomTitle}
              roomDescription = {room[0].roomDescription}
              roomLocation = {room[0].roomLocation}
              roomPrice = {room[0].roomPrice}
              roomQuantity = {room[0].roomQuantity}
              booked = {room[0].booked}/> : <h3>{serverMSG}</h3>}
            
          </div>
        </div>

        <div className={classes.userMenu}></div>
      </div>
  )
}

export default ProfilePage
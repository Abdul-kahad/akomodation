import { useEffect, useState } from 'react'
import classes from './UpdateRoomPage.module.css'
import { useNavigate, useParams } from 'react-router'
import Axios from 'axios'
import RoomCard from '../../Components/Rooms/RoomCard/RoomCard'

const UpdateRoomPage = () => {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData ] = useState({})
  const [serverMSG, setServerMSG ] = useState('')

  useEffect(() => {
    const fetchRoomDetails = async () => {
    const response = await Axios.get(`http://localhost:3000/rooms/${roomId}`)
    if(!response.data) {
      setServerMSG('Invalid room')
      alert('Invalid room')
    } 
    setFormData(response.data)
  }
    fetchRoomDetails()
  }, [roomId])

  const UpdateRoomHandler = async(e)  => {
    e.preventDefault()
    try {
      const response = await Axios.put(`http://localhost:3000/api/moderator/rooms/${roomId}`, formData,{ headers:{
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }})
      setServerMSG(response.data.message)
      alert(response.data.message)
      navigate('/')
    } catch (error) {
      console.error('Update room error:', error)
  
      const message =
        error.response?.data?.message || 'Failed to update room'
  
      setServerMSG(message)
      alert(message)
    }
  }

  return(
    <div className={classes.UpdateRoomPage}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <h2>Update Room</h2>
        </div>
        <div className={classes.Flex}>
          <form className={classes.Form} onSubmit={(e) => UpdateRoomHandler(e)}>
            <label>Add at most 3 images</label>
            <input 
              type="file" />
            <label>Title</label> 
            <input 
              type="text" 
              onChange={(e) => setFormData({...formData, roomTitle: e.target.value})} 
              value={formData.roomTitle || ''}
              placeholder='e.g Chamber and Hall'/>
            <label>Description</label>
            <input 
              type="text" 
              onChange={(e) => setFormData({...formData, roomDescription: e.target.value})} 
              value={formData.roomDescription || ''}
              placeholder='e.g This a a furnished chamber and hall'/>
            <label>Location</label>
            <input 
              type="text" 
              onChange={(e) => setFormData({...formData, roomLocation: e.target.value})} 
              value={formData.roomLocation || ''}
              placeholder='e.g Lamashegu'/>
            <label>Price</label>
            <input 
              type="number" 
              onChange={(e) => setFormData({...formData, roomPrice: e.target.value})} 
              value={formData.roomPrice || ''}
              placeholder='e.g GH3000'/>
            <label>Available Quantity</label>
            <input 
              type="number" 
              onChange={(e) => setFormData({...formData, roomQuantity: e.target.value})} 
              value={formData.roomQuantity || ''}
              placeholder='e.g 2'/>
            <button>Update Room</button>
          </form>
           <RoomCard 
            roomTitle={formData.roomTitle}
            roomDescription={formData.roomDescription}
            roomLocation={formData.roomLocation}
            roomPrice={formData.roomPrice}
            roomQuantity={formData.roomQuantity}
            hidden={true}/>
        </div>
      </div>
    </div>
  )
}
export default UpdateRoomPage
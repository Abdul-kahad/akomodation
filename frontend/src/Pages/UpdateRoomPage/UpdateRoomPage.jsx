import Axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import classes from './UpdateRoomPage.module.css'
import RoomCard from '../../Components/Rooms/RoomCard/RoomCard'
import SideNaveBar from '../../Components/SideNaveBar/SideNaveBar'

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

  return (
    <div className={classes.Users}>
      <div className={classes.Container}>
        <SideNaveBar />
        <div className={classes.MainWindow}>
          <div className={classes.Header}>
            <button className={classes.toggleSidenave}><i className="fas fa-bars"></i></button>
            <div className={classes.wrapper}>
              <i className="fas fa-bell" style={{fontSize: '1rem'}}></i>
              <i className="fas fa-envelope" style={{fontSize: '1rem'}}></i>
              <i className="fas fa-user" style={{fontSize: '1rem'}}></i>
            </div>
          </div>
          <div className={classes.Content}>
            <span>
              <p><strong>Edit room details and pricing</strong></p>
              <Link to="/"><small>Home <i className="fas fa-home"></i></small></Link>
            </span>
              
            <div className={classes.Flex}>
              <form className={classes.Form} onSubmit={(e) => UpdateRoomHandler(e)}>
                <label>Add at most 3 images</label>
                <input 
                  type="file"
                  accept='image/*' />
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
                <button> <i className='fas fa-sync'></i> Update Room</button>
              </form>
              <RoomCard 
                roomImage={formData.roomImage}
                roomTitle={formData.roomTitle}
                roomDescription={formData.roomDescription}
                roomLocation={formData.roomLocation}
                roomPrice={formData.roomPrice}
                roomQuantity={formData.roomQuantity}
                hidden={true}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateRoomPage
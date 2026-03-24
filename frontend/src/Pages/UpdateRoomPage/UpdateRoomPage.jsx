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
  const [sideBarOpen, setSideBarOpen] = useState(true)
  const [loader, setLoader] = useState(false)

  const toggleSideBar = () => {
    setSideBarOpen(prevState => !prevState)
  }

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
      setLoader(true)
      const response = await Axios.put(`http://localhost:3000/api/moderator/rooms/${roomId}`, formData,{ headers:{
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }})
      setLoader(false)
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
        <SideNaveBar isOpen={sideBarOpen} />
        <div className={classes.MainWindow}>
          <div className={classes.Header}>
            <i className="fas fa-bars" onClick={toggleSideBar}></i>
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
              
             <form  onSubmit={(e) => UpdateRoomHandler(e)}>
                  <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th><input type="file" name='roomImage' accept='image/*' onChange={(e) => setFormData({ ...formData, roomImage: e.target.files[0] })} /></th>
                      <th><input type="text" onChange={(e) => setFormData({ ...formData, roomTitle: e.target.value })} value={formData.roomTitle || ''} placeholder='e.g Chamber and Hall'/></th>
                      <th><input type="text" onChange={(e) => setFormData({ ...formData, roomDescription: e.target.value })}  value={formData.roomDescription || ''} placeholder='e.g This is a furnished chamber and hall'/> </th>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Price</th>
                      <th>Available Quantity</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th><input type="text" onChange={(e) => setFormData({ ...formData, roomLocation: e.target.value })} value={formData.roomLocation || ''} placeholder='e.g Lamashegu'/></th>
                      <th><input type="text" onChange={(e) => setFormData({ ...formData, roomPrice: e.target.value })}  value={formData.roomPrice || ''} placeholder='e.g GH3000'/> </th>
                      <th><input type="text" onChange={(e) => setFormData({ ...formData, roomQuantity: e.target.value })} value={formData.roomQuantity || ''} placeholder='e.g 2'/></th>
                    </tr>
                  </tbody>
                </table>
                <button type="submit"> <i className='fas fa-plus'></i> {loader ? 'Updating Room...' : 'Update Room'}</button>
              </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateRoomPage
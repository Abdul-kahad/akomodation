import { Axios } from 'axios'
import { useState } from 'react'
import RoomCard from '../../Components/Rooms/RoomCard/RoomCard'
import classes from './AddNewRoomPage.module.css'


const AddNewRoomPage = () => {
  const [formData, setFormData] = useState({})
  const [serverMSG, setServerMSG] = useState('')

  const AddNewRoomHandler = async (e) =>{
    e.preventDefault()
    try {
      const response = await Axios.post('http://localhost:3000/api/moderator/rooms', formData,{
        Headers:{
          authenticate: localStorage.getItem('accessToken')
        }
      })
      setServerMSG(response.data.message)
      alert(`${serverMSG}`)
    } catch (error) {
      console.log(`An error occure: ${error}`)
      setServerMSG('Failed to add room' || error.data.message)
    }
  }
  return(
    <div className={classes.AddNewRoomPage}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <h2>Add New Space</h2>
        </div>
        <div className={classes.Flex}>
          <form className={classes.Form} onSubmit={(e) => AddNewRoomHandler(e)}>
            <label>Add at most 3 images</label>
            <input type="file" />
            <label>Title</label>
            <input type="text" onChange={(e) => setFormData({...formData, roomTitle: e.target.value})} placeholder='e.g Chamber and Hall'/>
            <label>Description</label>
            <input type="text" onChange={(e) => setFormData({...formData, roomDescription: e.target.value})} placeholder='e.g This a a furnished chamber and hall'/>
            <label>Location</label>
            <input type="text" onChange={(e) => setFormData({...formData, roomLocation: e.target.value})} placeholder='e.g Lamashegu'/>
            <label>Price</label>
            <input type="number" onChange={(e) => setFormData({...formData, roomPrice: e.target.value})} placeholder='e.g GH3000'/>
            <label>Available Quantity</label>
            <input type="number" onChange={(e) => setFormData({...formData, roomQuantity: e.target.value})} placeholder='e.g 2'/>
            <button>Add Room</button>
          </form>
          {(formData.roomTitle == '') ? null : <RoomCard 
            roomTitle={formData.roomTitle}
            roomDescription={formData.roomDescription}
            roomLocation={formData.roomLocation}
            roomPrice={formData.roomPrice}
            roomQuantity={formData.roomQuantity}/>
            }
        </div>
      </div>
    </div>
  )
}

export default AddNewRoomPage
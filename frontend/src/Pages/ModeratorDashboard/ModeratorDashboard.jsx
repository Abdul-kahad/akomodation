import Axios from 'axios'
import { useEffect, useState } from 'react'
import classes from './ModeratorDashboard.module.css'
import SideNaveBar from '../../Components/SideNaveBar/SideNaveBar'
import { useNavigate,Link } from 'react-router-dom'


const ModeratorDashboard = () => {
  const [rooms, setRooms] = useState([])
  const [serverMSG, setServerMSG] = useState('')
  const [toggle, setToggle] = useState()
  const navigate = useNavigate()
  const [sideBarOpen, setSideBarOpen] = useState(true)
  const userId = localStorage.getItem('userid')

  const toggleSideBar = () => {
    setSideBarOpen(prevState => !prevState)
  }
 
  useEffect(() => {
    const fetchRooms = async() => {

      const response = await Axios.get('http://localhost:3000/api/moderator/dashboard', {
        headers:{
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setRooms(response.data)
      setServerMSG(response.data.message)} 
    fetchRooms()
  },[])


  const deleteHandler = async(roomId) => {
        try {
          const confirmDelete = window.confirm('Are you sure you want to delete this room?')
          if(!confirmDelete) return
          const response = await Axios.delete(`http://localhost:3000/api/moderator/rooms/${roomId}`, {
              headers:{
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }})
          setServerMSG(response.data.message)
          alert(response.data.message)
        } catch (error) {
          setServerMSG(error?.message)
          console.log(`an error occured: ${error}`)
        }
  }
  console.log(rooms)
  return (
    <div className={classes.Dashboard}>
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
              <p><strong>Dashboard</strong></p>
              <Link to="/"><small>Home <i className="fas fa-home"></i></small></Link>
            </span>
              <div className={classes.DashboardGrid}>
                
                  {/* <div className={classes.gridItem} style={{backgroundColor: "#9C27B0" }}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>{users && users.length}</h2>
                        <p>Total Users</p>
                      </div>
                      <i className="fas fa-users"></i>
                    </div>
                  </div>
                  <div className={classes.gridItem} style={{backgroundColor: "#4CAF50"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>{
                          users.filter(room => room.suspended == false).length}</h2>
                        <p>Active Users</p>
                      </div>
                      <i className="fas fa-users"></i>
                    </div>
                  </div> */}
                  <div className={classes.gridItem} style={{backgroundColor: "#2196F3"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>{rooms && rooms.length}</h2>
                        <p>Total Rooms</p>
                      </div>
                      <i className="fas fa-bed"></i>
                    </div>
                  </div>
                  <div className={classes.gridItem} style={{backgroundColor: "#FF9800"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>{
                          rooms.filter(room => room.booked == true).length}</h2>
                        <p>Booked Rooms</p>
                      </div>
                      <i className="fas fa-calendar-check"></i>
                    </div>
                  </div>
                  <div className={classes.gridItem} style={{backgroundColor: "#9C27B0"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>Ghc. 000.00</h2>
                        <p>Total Revenue</p>
                      </div>
                      <i className="fas fa-money-bill-wave"></i>
                    </div>
                  </div>
                
                
                  <div className={classes.gridItem} style={{backgroundColor: "#4CAF50"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>{
                          rooms.filter(room => room.booked == false).length}</h2>
                        <p>Available Rooms</p>
                      </div>
                      <i className="fas fa-bed"></i>
                    </div>
                  </div>
                  <div className={classes.gridItem} style={{backgroundColor: "#2196F3"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>{
                          rooms.filter(room => room.booked == true).length}</h2>
                        <p>Occupied Rooms</p>
                      </div>
                      <i className="fas fa-bed"></i>
                    </div>
                  </div>
                  <div className={classes.gridItem} style={{backgroundColor: "#FF9800"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>1</h2>
                        <p>Recent Bookings</p>
                      </div>
                      <i className='fas fa-calendar-check'></i>
                    </div>
                  </div> 
                  <div className={classes.gridItem} style={{backgroundColor: "#9C27B0"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>0</h2>
                        <p>Recent Users</p>
                      </div>
                      <i className="fas fa-users"></i>
                    </div>
                  </div>
                

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModeratorDashboard
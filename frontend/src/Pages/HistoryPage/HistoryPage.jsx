import Axios from 'axios'
import { useEffect, useState } from 'react'
import SideNaveBar from '../../Components/SideNaveBar/SideNaveBar'
import classes from './HistoryPage.module.css'
import { Link } from 'react-router-dom'

const HistoryPage = () => {
  const [rooms, setRooms] = useState([])
  const [serverMSG, setServerMSG] = useState('')
  const [sideBarOpen, setSideBarOpen] = useState(true)

  const toggleSideBar = () => {
    setSideBarOpen(prevState => !prevState)
  }

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/', {
          headers:{
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setRooms(response.data.rooms)
        // console.log(response.data)
      } catch (error) {
        setServerMSG(error.response.data.message || 'Failed to fetch rooms')
      }}
      fetchRooms()
    },[])

  console.log(rooms)
  return (
    <div className={classes.HistoryPage}>
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
              <p><strong>Booking history</strong></p>
              <Link to="/"><small>Home <i className="fas fa-home"></i></small></Link>
            </span>
              
            <div className={classes.tableContainer}>
              <table>
                  <thead>
                      <tr>
                          <th>Room ID</th>
                          <th>Room Title</th>
                          <th>Booked By</th>
                          <th>Booked Date</th>
                          <th>Status</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                   {
                   rooms.filter(room => room.booked) // Returns only booked rooms
                        .map(room => (
                          <tr key={room._id}>
                            <td>{room._id}</td>
                            <td>{room.roomTitle}</td>
                            <td>{room.tenant}</td>
                            <td>{room.createdAt}</td>
                            <td>
                              <span className={`${classes.status} ${room.booked ? classes.suspended : classes.active}`}>
                                {room.booked ? 'Booked' : 'Available'}
                              </span>
                            </td>
                          </tr>
                        ))
                      }

                  </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryPage
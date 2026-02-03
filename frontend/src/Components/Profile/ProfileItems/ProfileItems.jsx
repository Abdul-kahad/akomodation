import { NavLink } from 'react-router-dom'
import classes from './ProfileItems.module.css'

const LogoutHandler = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('userRole')
  window.location.reload()
}

const ProfileItems = () => {
  return (
    <div className={classes.ProfileItems}>
      <ul className={classes.ListItems}>
        <li><NavLink className={classes.NavLink} to='/profile'>Profile</NavLink></li>
        <li><NavLink className={classes.NavLink} to='/mybookings'>My Bookings</NavLink></li>
        <li><NavLink className={classes.NavLink} to='/addroom'>Add Room</NavLink></li>
        <li><NavLink className={classes.NavLink} to='/booking/history'>Booking History</NavLink></li>
        <li><NavLink className={classes.NavLink} to='#'>Inbox</NavLink></li>
        <li><NavLink className={classes.NavLink} to='#'>Settings</NavLink></li>
        <li onClick={LogoutHandler}>Logout</li>
      </ul>
    </div>
  )
}

export default ProfileItems
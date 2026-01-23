import { NavLink } from 'react-router-dom'
import classes from './ProfileItems.module.css'

const ProfileItems = () => {
  return (
    <div className={classes.ProfileItems}>
      <ul className={classes.ListItems}>
        <li>Profile</li>
        <li>My Rooms</li>
        <li>My Bookings</li>
        <li><NavLink className={classes.NavLink} to='/addroom'>Add Room</NavLink></li>
        <li>Inbox</li>
        <li>Booking History</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default ProfileItems
import { NavLink, useNavigate } from 'react-router-dom'
import classes from './ProfileItems.module.css'

const LogoutHandler = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('userRole')
  window.location.reload()
}

const ProfileItems = (props) => {
  const navigate = useNavigate()
  const userRole = localStorage.getItem('userRole')
  if(userRole === 'moderator') {
  
    return (
      <div className={classes.ProfileItems}>
        <ul className={classes.ListItems}>
          <NavLink className={classes.NavLink} to='/moderator/dashboard'><li onClick={props.Clicked}><i className="fas fa-tachometer-alt"></i> Dashboard</li></NavLink>
          <NavLink className={classes.NavLink} to='/profile'><li onClick={props.Clicked}><i className="fas fa-user"></i> Profile</li></NavLink>
          <NavLink className={classes.NavLink} to='/mybookings'><li onClick={props.Clicked}><i className="fas fa-bookmark"></i> My Bookings</li></NavLink>
          <NavLink className={classes.NavLink} to='/addroom'><li onClick={props.Clicked}><i className="fas fa-plus-circle"></i> Add Room</li></NavLink>
          <NavLink className={classes.NavLink} to='/booking/history'><li onClick={props.Clicked}><i className="fas fa-history"></i> Booking History</li></NavLink>
          <NavLink className={classes.NavLink} to='/inbox'><li onClick={props.Clicked}><i className="fas fa-inbox"></i> Inbox</li></NavLink>
          <NavLink className={classes.NavLink} to='/settings'><li onClick={props.Clicked}><i className="fas fa-cog"></i> Settings</li></NavLink>
          <li onClick={LogoutHandler} className={classes.Logout}> <i className="fas fa-sign-out-alt"></i> Logout</li>
        </ul>
      </div>
    )}else if(userRole === 'user') {
      return (
        <div className={classes.ProfileItems}>
          <ul className={classes.ListItems}>
            <NavLink className={classes.NavLink} to='/profile'><li onClick={props.Clicked}><i className="fas fa-user"></i> Profile</li></NavLink>
            <NavLink className={classes.NavLink} to='/mybookings'><li onClick={props.Clicked}><i className="fas fa-bookmark"></i> My Bookings</li></NavLink>
            <NavLink className={classes.NavLink} to='/booking/history'><li onClick={props.Clicked}><i className="fas fa-history"></i> Booking History</li></NavLink>
            <NavLink className={classes.NavLink} to='/inbox'><li onClick={props.Clicked}><i className="fas fa-inbox"></i> Inbox</li></NavLink>
            <NavLink className={classes.NavLink} to='/settings'><li onClick={props.Clicked}><i className="fas fa-cog"></i> Settings</li></NavLink>
            <li onClick={LogoutHandler} className={classes.Logout}> <i className="fas fa-sign-out-alt"></i> Logout</li>
          </ul>
        </div>
      )
    }else if(userRole === 'admin') {
      return (
        <div className={classes.ProfileItems}>
          <ul className={classes.ListItems}>
            <NavLink className={classes.NavLink} to='/admin/dashboard'><li onClick={props.Clicked}><i className="fas fa-tachometer-alt"></i> Dashboard</li></NavLink>
            <NavLink className={classes.NavLink} to='/profile'><li onClick={props.Clicked}><i className="fas fa-user"></i> Profile</li></NavLink>
            <NavLink className={classes.NavLink} to='/mybookings'><li onClick={props.Clicked}><i className="fas fa-bookmark"></i> My Bookings</li></NavLink>
            <NavLink className={classes.NavLink} to='/addroom'><li onClick={props.Clicked}><i className="fas fa-plus-circle"></i> Add Room</li></NavLink>
            <NavLink className={classes.NavLink} to='/booking/history'><li onClick={props.Clicked}><i className="fas fa-history"></i> Booking History</li></NavLink>
            <NavLink className={classes.NavLink} to='/inbox'><li onClick={props.Clicked}><i className="fas fa-inbox"></i> Inbox</li></NavLink>
            <NavLink className={classes.NavLink} to='/settings'><li onClick={props.Clicked}><i className="fas fa-cog"></i> Settings</li></NavLink>
            <li onClick={LogoutHandler} className={classes.Logout}> <i className="fas fa-sign-out-alt"></i> Logout</li>
          </ul>
        </div>
      )
    }
    else {
      navigate('/login')
    }
}

export default ProfileItems
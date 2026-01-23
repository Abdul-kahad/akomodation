import { NavLink, useNavigate } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useEffect, useState } from 'react'
import Profile from '../Profile/Profile'
import ProfileItems from '../Profile/ProfileItems/ProfileItems'

const Navbar = () => {
  const navigate = useNavigate()
  const userRole = localStorage.getItem('userRole')
  useEffect(() => {
    if(!userRole) navigate('/')
    },[])

    const [showProfileItems, setShowProfileItems] = useState(false)

    const toggleProfileItems = () => {
      setShowProfileItems((prevState) => !prevState)
    }
  return(
    <div className={classes.Navbar}>
      <NavLink to='/'><h3 className={classes.Logo}>Akomodation</h3></NavLink>
      <ul className={classes.Navlist}>
        <NavLink to='/findrooms'><li className={classes.Listitem}><h4>Find Rooms</h4></li></NavLink>
        <NavLink to='/roomsnearby'><li className={classes.Listitem}><h4>Rooms Nearby</h4></li></NavLink>
      </ul>
      {!userRole ? <NavLink to='/register'><button className={classes.Signup}>Signup</button></NavLink> : <Profile onClick={toggleProfileItems} />}
      {showProfileItems && <ProfileItems />}
    </div>
  )
}
export default Navbar
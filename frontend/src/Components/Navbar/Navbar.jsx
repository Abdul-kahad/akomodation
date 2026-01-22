import { NavLink, useNavigate } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useEffect } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const userRole = localStorage.getItem('userRole')
  useEffect(() => {
    if(!userRole) navigate('/')
  },[])
  return(
    <div className={classes.Navbar}>
      <NavLink to='/'><h3 className={classes.Logo}>Akomodation</h3></NavLink>
      <ul className={classes.Navlist}>
        <NavLink to='/findrooms'><li className={classes.Listitem}><h4>Find Rooms</h4></li></NavLink>
        <NavLink to='/roomsnearby'><li className={classes.Listitem}><h4>Rooms Nearby</h4></li></NavLink>
      </ul>
      <NavLink to='/register'><button className={classes.Signup}>{!userRole ? 'Signup' : <NavLink to='/logout' className={classes.Logout}>Logout</NavLink>}</button></NavLink>
    </div>
  )
}
export default Navbar
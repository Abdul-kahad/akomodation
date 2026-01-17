import { useNavigate } from 'react-router'
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
      <h3 className={classes.Logo}>Akomodation</h3>
      <ul className={classes.Navlist}>
        <li className={classes.Listitem}><h4>Find Rooms</h4></li>
        <li className={classes.Listitem}><h4>Rooms Nearby</h4></li>
      </ul>
      <button className={classes.Signup}>{!userRole ? 'Signup' : userRole}</button>
    </div>
  )
}
export default Navbar
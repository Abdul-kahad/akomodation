import classes from './Navbar.module.css'

const Navbar = () => {
  return(
    <div className={classes.Navbar}>
      <h3 className={classes.Logo}>Akomodation</h3>
      <ul className={classes.Navlist}>
        <li className={classes.Listitem}><h4>Find Rooms</h4></li>
        <li className={classes.Listitem}><h4>Rooms Nearby</h4></li>
      </ul>
      <button className={classes.Signup}>SignUp</button>
    </div>
  )
}
export default Navbar
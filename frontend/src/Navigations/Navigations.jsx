import Navbar from '../Components/Navbar/Navbar'
import SideNav from '../Components/SideNav/SideNav'
import classes from './Navigations.module.css'

const Navigations = (props) =>{
  return(
    <div className={classes.Navigations}>
      <Navbar />
      <SideNav />
       {props.children}
    </div>
  )
}
export default Navigations
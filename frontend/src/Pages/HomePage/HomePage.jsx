import SideNav from '../../Components/SideNav/SideNav'
import Filter from '../../Components/Filter/Filter'
import NewArivals from '../../Components/NewArivals/NewArivals'
import Rooms from '../../Components/Rooms/Rooms'
import classes from './HomePage.module.css'


const HomePage = () => {
  return(
    <div className={classes.HomePage}>
      <SideNav />
      <div className={classes.Body}>
        <Filter />
        <NewArivals />
        <Rooms />
      </div>
    </div>
  )
}
export default HomePage
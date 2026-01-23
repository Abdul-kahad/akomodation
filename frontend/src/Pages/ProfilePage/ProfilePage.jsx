import RoomCard from '../../Components/Rooms/RoomCard/RoomCard'
import classes from './ProfilePage.module.css'
const ProfilePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.SideNav}>
        
      </div>

        <div className={classes.ProfileContent}>
          <div className={classes.User}>
            <div className={classes.ProfileImages}>
              <img className={classes.CoverPhoto} />
              <img className={classes.ProfilePhoto} />
            </div>
            <div className={classes.userDetails}>
              <h2>John Doe</h2>
              <p>Email: john.doe@example.com</p>
            </div>
          </div>
          <div className={classes.UserBookings}>
            <h2>My Room</h2>
            <RoomCard />
          </div>
        </div>

        <div className={classes.userMenu}></div>
      </div>
  )
}

export default ProfilePage
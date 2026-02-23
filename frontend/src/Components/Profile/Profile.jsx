import classes from './Profile.module.css'

const Profile = (props) => {
  return (
    <div className={classes.Profile} onClick={props.onClick}>
      <div className={classes.ProfilePic}>
        <img className={classes.Pic} src={props.profilePic ? props.profilePic : "../src/assets/profile.png"} alt="user-profile" />
      </div>
      <p>My Profile</p>
    </div>
  )
}

export default Profile
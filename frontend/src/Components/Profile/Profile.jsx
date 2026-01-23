import classes from './Profile.module.css'

const Profile = (props) => {
  return (
    <div className={classes.Profile} onClick={props.onClick}>
      <img className={classes.ProfilePic} />
      <p>My Profile</p>
    </div>
  )
}

export default Profile
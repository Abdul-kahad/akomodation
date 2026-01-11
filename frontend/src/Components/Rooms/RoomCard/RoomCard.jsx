import classes from './RoomCard.module.css'

const RoomCard = () => {
  return(
    <div className={classes.RoomCard}>
      <div className={classes.RoomImagConatiner}>
        <img className={classes.RoomImg} src alt />
      </div>
      <div className={classes.RoomInfo}>
        <h3>Title</h3>
        <p>Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, eius!</p>
        <small>Loction</small>
        <p>Price</p>
        <button>Book</button>
      </div>
    </div> 
  )
}
export default RoomCard
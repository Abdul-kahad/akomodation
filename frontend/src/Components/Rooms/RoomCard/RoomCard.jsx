import classes from './RoomCard.module.css'

const RoomCard = (props) => {
  return(
    <div className={classes.RoomCard}>
      <div className={classes.RoomImagConatiner}>
        <img className={classes.RoomImg} src alt />
      </div>
      <div className={classes.RoomInfo}>
        <h3>{props.roomTitle}</h3>
        <p>{props.roomDescription}</p>
        <small>{props.roomLocation}</small>
        <p>{props.roomPrice}</p>
        <button>Book</button>
      </div>
    </div> 
  )
}
export default RoomCard
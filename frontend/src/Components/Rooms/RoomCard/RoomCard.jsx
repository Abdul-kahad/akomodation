import { Link } from 'react-router-dom'
import classes from './RoomCard.module.css'

const RoomCard = (props) => {
  return(
    <div className={classes.RoomCard} onClick={props.clicked}>
      <div className={classes.RoomImagConatiner}>
        <img className={classes.RoomImg} />
      </div>
      <div className={classes.RoomInfo}>
        <h3>{props.roomTitle}</h3>
        <p>{props.roomDescription}</p>
        <small>{props.roomLocation}</small>
        <p>{props.roomPrice}</p>
        <p>{props.roomQuantity}</p>
        <Link to='/mybookings' hidden={props.hidden}><button>View Details</button></Link>
      </div>
    </div> 
  )
}
export default RoomCard
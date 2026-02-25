import { Link } from 'react-router-dom'
import classes from './RoomCard.module.css'

const RoomCard = (props) => {
  return(
    <div className={classes.RoomCard} onClick={props.clicked}>
      <div className={classes.RoomImagConatiner}>
        <img className={classes.RoomImg} src={props.roomImage ? props.roomImage : 'src/assets/image.png'}/>
      </div>
      <div className={classes.RoomInfo}>
        <h3>{props.roomTitle}</h3>
        <article>{props.roomDescription}</article>
        <p><strong>Price: ¢</strong>{props.roomPrice}</p>
        <span>
          <small><strong> <i className="fas fa-map-marker-alt"></i> Locatiion:</strong> {props.roomLocation}</small>
          <small><strong> <i className="fas fa-sort-numeric-up"></i> Quantity:</strong> {props.roomQuantity}</small>
        </span>
        <Link to='/mybookings' hidden={props.hidden}><button> <i className="fas fa-eye"></i> View Details</button></Link>
      </div>
    </div> 
  )
}
export default RoomCard
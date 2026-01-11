import RoomCard from './RoomCard/RoomCard'
import classes from './Rooms.module.css'

const Rooms = () => {
  return(
    <div className={classes.Rooms}>
      <div className={classes.RoomsContainer}>
        <div className={classes.RoomsHeader}>
          <h2>Browse Rooms</h2>
        </div>
        <div className={classes.RoomsGrid}>
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </div>
    </div>
  )
}
export default Rooms
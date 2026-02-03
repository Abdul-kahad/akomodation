import classes from './HistoryPage.module.css'

const HistoryPage = () => {
  return (
    <div className={classes.HistoryPage}>
      <h2>My Booking History</h2>
      <div className={classes.HistoryCard}>
        <img className={classes.Img} />
        <div className={classes.HistoryBody}>
          <h3>Title</h3>
          <p>Description</p>
          <p>Location</p>
          <p>Price</p>
          <p>Status</p>
        </div>
      </div>

      <div className={classes.HistoryCard}>
        <img className={classes.Img} />
        <div className={classes.HistoryBody}>
          <h3>Title</h3>
          <p>Description</p>
          <p>Location</p>
          <p>Price</p>
          <p>Status</p>
        </div>
      </div>

      <div className={classes.HistoryCard}>
        <img className={classes.Img} />
        <div className={classes.HistoryBody}>
          <h3>Title</h3>
          <p>Description</p>
          <p>Location</p>
          <p>Price</p>
          <p>Status</p>
        </div>
      </div>
    </div>
  )
}

export default HistoryPage
import SideNaveBar from '../../Components/SideNaveBar/SideNaveBar'
import classes from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={classes.Dashboard}>
      <div className={classes.Container}>
        <SideNaveBar />
        <div className={classes.MainWindow}>
          <div className={classes.Header}>
            <button className={classes.toggleSidenave}><i className="fas fa-bars"></i></button>
            <div className={classes.wrapper}>
              <i className="fas fa-bell" style={{fontSize: '1rem'}}></i>
              <i className="fas fa-envelope" style={{fontSize: '1rem'}}></i>
              <i className="fas fa-user" style={{fontSize: '1rem'}}></i>
            </div>
          </div>
          <div className={classes.Content}>
            <span>
              <p><strong>Dashboard</strong></p>
              <small>Home <i className="fas fa-home"></i></small>
            </span>
              <div className={classes.DashboardGrid}>
                <div className={classes.gridRow}>
                  <div className={classes.gridItem} style={{backgroundColor: "#4CAF50"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>103</h2>
                        <p>Total Users</p>
                      </div>
                      <i className="fas fa-users"></i>
                    </div>
                  </div>
                  <div className={classes.gridItem} style={{backgroundColor: "#2196F3"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>50</h2>
                        <p>Total Rooms</p>
                      </div>
                      <i className="fas fa-bed"></i>
                    </div>
                  </div>
                  <div className={classes.gridItem} style={{backgroundColor: "#FF9800"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>25</h2>
                        <p>Total Bookings</p>
                      </div>
                      <i className="fas fa-calendar-check"></i>
                    </div>
                  </div>
                  <div className={classes.gridItem} style={{backgroundColor: "#9C27B0"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>Ghc. 100,000</h2>
                        <p>Total Revenue</p>
                      </div>
                      <i className="fas fa-money-bill-wave"></i>
                    </div>
                  </div>
                </div>
                <div className={classes.gridRow}>
                  <div className={classes.gridItem} style={{backgroundColor: "#4CAF50"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>25</h2>
                        <p>Available Rooms</p>
                      </div>
                      <i className="fas fa-bed"></i>
                    </div>
                  </div>
                  <div className={classes.gridItem} style={{backgroundColor: "#2196F3"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>25</h2>
                        <p>Occupied Rooms</p>
                      </div>
                      <i className="fas fa-bed"></i>
                    </div>
                  </div>
                  <div className={classes.gridItem} style={{backgroundColor: "#FF9800"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>10</h2>
                        <p>Recent Bookings</p>
                      </div>
                      <i className='fas fa-calendar-check'></i>
                    </div>
                  </div> 
                  <div className={classes.gridItem} style={{backgroundColor: "#9C27B0"}}>
                    <div className={classes.content}>
                      <div className={classes.info}>
                        <h2>5</h2>
                        <p>Recent Users</p>
                      </div>
                      <i className="fas fa-users"></i>
                    </div>
                  </div>
                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
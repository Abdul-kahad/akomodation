import { useState } from 'react'
import classes from './SideNaveBar.module.css'
import { Link } from 'react-router-dom'

const SideNaveBar = ({ isOpen }) => {

  return (
    <>{
      !isOpen ? 
        <div className={classes.SideNaveBar}>
          <div className={`${classes.Logo} ${classes.logo}`} onClick={() => toggleSideBar()}>
            <img src="/public/favicon.ico" alt="logo" />
            <span hidden>Akomodation</span>
          </div>
          <hr />
          <ul className={`${classes.sideMenu} ${classes.sidemenu}`}>
            <li className={classes.navHeader}><i className={`fas fa-tachometer-alt ${classes.Icon}`}></i></li>
            <li className={classes.navHeader}><i className={`fas fa-user ${classes.Icon}`}></i></li>
            <li className={classes.navHeader}><i className={`fas fa-home ${classes.Icon}`}></i></li>
            <li className={classes.navHeader}><i className={`fas fa-calendar-alt ${classes.Icon}`}></i></li>
            <li className={classes.navHeader}><i className={`fas fa-money-bill-wave ${classes.Icon}`}></i></li>
            <li className={classes.navHeader}><i className={`fas fa-chart-line ${classes.Icon}`}></i></li>
            <li className={classes.navHeader}><i className={`fas fa-star ${classes.Icon}`}></i></li>
            <li className={classes.navHeader}><i className={`fas fa-comments ${classes.Icon}`}></i></li>
            <li className={classes.navHeader}><i className={`fas fa-cog ${classes.Icon}`}></i></li>
          </ul>
        </div> :
       <div className={classes.SideNaveBar}>
          <Link to="/"><div className={classes.Logo} >
            <img src="/public/favicon.ico" alt="logo" />
            <span>Akomodation</span>
          </div></Link>
          <hr />
          <ul className={classes.sideMenu}>
            <Link to="/admin/dashboard"><li className={classes.navLink}>
              <i className="fas fa-tachometer-alt"></i>
              <span >Dashboard</span>
            </li></Link>
            <li className={classes.navHeader}><i className="fas fa-user"></i> User Management</li>
            <Link to="/admin/dashboard/users"><li className={classes.navLink}>View and search all registered users</li></Link>
            <Link to="/admin/dashboard/manage/users"><li className={classes.navLink}>Manage user</li></Link>
            <Link to="/admin/dashboard/booking/history"><li className={classes.navLink}>View booking history</li></Link>
            <li className={classes.navLink}>Assign roles</li>

            <li className={classes.navHeader}><i className="fas fa-home"></i> Property Management</li>
            <Link to="/addroom"><li className={classes.navLink}>Add new rooms or properties</li></Link>
            <Link to="/update/updateroom/:roomId"><li className={classes.navLink}>Edit room details and pricing</li></Link>
            <li className={classes.navLink}>Update availability status</li>

            <li className={classes.navHeader}><i className="fas fa-calendar-alt"></i> Booking Management</li>
            <Link to="/admin/dashboard/bookings"><li className={classes.navLink}>View all bookings</li></Link>
            <li className={classes.navLink}>Approve or reject reservations</li>
            <li className={classes.navLink}>Cancel bookings</li>
            <li className={classes.navLink}>Track booking status </li>
            <li className={classes.navLink}>Filter bookings by date</li>

            <li className={classes.navHeader}><i className="fas fa-money-bill-wave"></i> Payment Management</li>
            <li className={classes.navLink}>View all transactions</li>
            <li className={classes.navLink}>Track payment status </li>
            <li className={classes.navLink}>Monitor total revenue</li>
            <li className={classes.navLink}>Generate financial reports</li>
            <li className={classes.navLink}>Manage refunds</li>

            <li className={classes.navHeader}><i className="fas fa-chart-line"></i> Reports & Analytics</li>
            <li className={classes.navLink}>Monthly revenue analysis</li>
            <li className={classes.navLink}>Most booked room categories</li>
            <li className={classes.navLink}>Most popular locations</li>
            <li className={classes.navLink}>User growth tracking</li>
            <li className={classes.navLink}>Occupancy rate analysis</li>
            <li className={classes.navLink}>Downloadable reports (PDF / CSV)</li>

            <li className={classes.navHeader}><i className="fas fa-star"></i> Reviews & Ratings</li>
            <li className={classes.navLink}>View submitted reviews</li>
            <li className={classes.navLink}>Delete inappropriate content</li>
            <li className={classes.navLink}>Approve reviews before publishing</li>

            <li className={classes.navHeader}><i className="fas fa-comments"></i> Messaging & Support System</li>
            <li className={classes.navLink}>View customer complaints</li>
            <li className={classes.navLink}>Respond to support tickets</li>
            <li className={classes.navLink}>Mark issues as resolved</li>

            <li className={classes.navHeader}><i className="fas fa-cog"></i> System Settings</li>
            <li className={classes.navLink}>Site name and branding settings</li>
            <li className={classes.navLink}>Commission percentage configuration</li>
            <li className={classes.navLink}>Payment gateway setup</li>
            <li className={classes.navLink}>Currency settings (GHS)</li>
            <li className={classes.navLink}>Maintenance mode toggle</li>
          </ul> 
        </div>
    }</>
  )
}

export default SideNaveBar
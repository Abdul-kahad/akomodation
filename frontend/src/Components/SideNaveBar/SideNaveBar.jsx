import { useState } from 'react'
import classes from './SideNaveBar.module.css'
import { Link } from 'react-router-dom'

const AccordionSection = ({ icon, title, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <li className={classes.navHeader} onClick={() => setOpen(prev => !prev)}>
        <span>
          <i className={icon}></i> {title}
        </span>
        <i className={`fas fa-chevron-${open ? 'up' : 'down'} ${classes.chevron}`}></i>
      </li>
      {open && <ul className={classes.subMenu}>{children}</ul>}
    </>
  )
}

const SideNaveBar = ({ isOpen }) => {
  const userRole = localStorage.getItem('userRole')

  if (!isOpen) {
    return (
      <div className={classes.SideNaveBar}>
        <div className={classes.Logo} style={{ justifyContent: 'center' }}>
          <img src="/public/favicon.ico" alt="logo" />
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
      </div>
    )
  }

  if (userRole === 'admin') return (
    <div className={classes.SideNaveBar}>
      <Link to="/">
        <div className={classes.Logo}>
          <img src="/public/favicon.ico" alt="logo" />
          <span>Akomodation</span>
        </div>
      </Link>
      <hr />
      <ul className={classes.sideMenu}>

        <Link to="/admin/dashboard"><li className={classes.navLink}>
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </li></Link>

        <Link to="/admin/dashboard/manage/logs"><li className={classes.navLink}>
          <i className="fas fa-info" style={{margin: '0 5px'}}></i> 
          <span> System Logs</span>
        </li></Link>

        <AccordionSection icon="fas fa-user" title="User Management">
          <Link to="/admin/dashboard/users"><li className={classes.navLink}>View all registered users</li></Link>
          <Link to="/admin/dashboard/manage/users"><li className={classes.navLink}>Manage user</li></Link>
          <Link to="/admin/dashboard/booking/history"><li className={classes.navLink}>View booking history</li></Link>
          <li className={classes.navLink}>Assign roles</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-home" title="Property Management">
          <Link to="/moderator/dashboard/rooms"><li className={classes.navLink}>All Rooms</li></Link>
          <Link to="/addroom"><li className={classes.navLink}>Add new rooms or properties</li></Link>
          <li className={classes.navLink}>Update availability status</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-calendar-alt" title="Booking Management">
          <Link to="/admin/dashboard/bookings"><li className={classes.navLink}>View all bookings</li></Link>
          <li className={classes.navLink}>Approve or reject reservations</li>
          <li className={classes.navLink}>Cancel bookings</li>
          <li className={classes.navLink}>Track booking status</li>
          <li className={classes.navLink}>Filter bookings by date</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-money-bill-wave" title="Payment Management">
          <li className={classes.navLink}>View all transactions</li>
          <li className={classes.navLink}>Track payment status</li>
          <li className={classes.navLink}>Monitor total revenue</li>
          <li className={classes.navLink}>Generate financial reports</li>
          <li className={classes.navLink}>Manage refunds</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-chart-line" title="Reports & Analytics">
          <li className={classes.navLink}>Monthly revenue analysis</li>
          <li className={classes.navLink}>Most booked room categories</li>
          <li className={classes.navLink}>Most popular locations</li>
          <li className={classes.navLink}>User growth tracking</li>
          <li className={classes.navLink}>Occupancy rate analysis</li>
          <li className={classes.navLink}>Downloadable reports (PDF / CSV)</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-star" title="Reviews & Ratings">
          <li className={classes.navLink}>View submitted reviews</li>
          <li className={classes.navLink}>Delete inappropriate content</li>
          <li className={classes.navLink}>Approve reviews before publishing</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-comments" title="Messaging & Support">
          <li className={classes.navLink}>View customer complaints</li>
          <li className={classes.navLink}>Respond to support tickets</li>
          <li className={classes.navLink}>Mark issues as resolved</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-cog" title="System Settings">
          <li className={classes.navLink}>Site name and branding settings</li>
          <li className={classes.navLink}>Commission percentage configuration</li>
          <li className={classes.navLink}>Payment gateway setup</li>
          <li className={classes.navLink}>Currency settings (GHS)</li>
          <li className={classes.navLink}>Maintenance mode toggle</li>
        </AccordionSection>

      </ul>
    </div>
  )

  if (userRole === 'moderator') return (
    <div className={classes.SideNaveBar}>
      <Link to="/"><div className={classes.Logo}>
        <img src="/public/favicon.ico" alt="logo" />
        <span>Akomodation</span>
      </div></Link>
      <hr />
      <ul className={classes.sideMenu}>

        <Link to="/moderator/dashboard"><li className={classes.navLink}>
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </li></Link>

        <AccordionSection icon="fas fa-user" title="Tenant Management">
          <Link to="/moderator/dashboard/tenants"><li className={classes.navLink}>Manage tenants</li></Link>
        </AccordionSection>

        <AccordionSection icon="fas fa-home" title="Property Management">
          <Link to="/moderator/dashboard/rooms"><li className={classes.navLink}>All Rooms</li></Link>
          <Link to="/addroom"><li className={classes.navLink}>Add new rooms or properties</li></Link>
          <li className={classes.navLink}>Update availability status</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-calendar-alt" title="Booking Management">
          <Link to="/moderator/dashboard/bookings"><li className={classes.navLink}>View all bookings</li></Link>
          <li className={classes.navLink}>Approve or reject reservations</li>
          <li className={classes.navLink}>Cancel bookings</li>
          <li className={classes.navLink}>Track booking status</li>
          <li className={classes.navLink}>Filter bookings by date</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-money-bill-wave" title="Payment Management">
          <li className={classes.navLink}>View all transactions</li>
          <li className={classes.navLink}>Track payment status</li>
          <li className={classes.navLink}>Monitor total revenue</li>
          <li className={classes.navLink}>Generate financial reports</li>
          <li className={classes.navLink}>Manage refunds</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-chart-line" title="Reports & Analytics">
          <li className={classes.navLink}>Monthly revenue analysis</li>
          <li className={classes.navLink}>Most booked room categories</li>
          <li className={classes.navLink}>Most popular locations</li>
          <li className={classes.navLink}>User growth tracking</li>
          <li className={classes.navLink}>Occupancy rate analysis</li>
          <li className={classes.navLink}>Downloadable reports (PDF / CSV)</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-star" title="Reviews & Ratings">
          <li className={classes.navLink}>View submitted reviews</li>
          <li className={classes.navLink}>Delete inappropriate content</li>
          <li className={classes.navLink}>Approve reviews before publishing</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-comments" title="Messaging & Support">
          <li className={classes.navLink}>View customer complaints</li>
          <li className={classes.navLink}>Respond to support tickets</li>
          <li className={classes.navLink}>Mark issues as resolved</li>
        </AccordionSection>

        <AccordionSection icon="fas fa-cog" title="System Settings">
          <li className={classes.navLink}>Site name and branding settings</li>
          <li className={classes.navLink}>Commission percentage configuration</li>
          <li className={classes.navLink}>Payment gateway setup</li>
          <li className={classes.navLink}>Currency settings (GHS)</li>
          <li className={classes.navLink}>Maintenance mode toggle</li>
        </AccordionSection>

      </ul>
    </div>
  )

  return null
}

export default SideNaveBar
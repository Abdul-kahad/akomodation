import classes from './SideNav.module.css'

const SideNav = () => {
  return(
    <aside className={classes.SideNav}>
      <div className={classes.CountryGroup}>
        <h2>Country</h2>
        <p>Ghana</p>
      </div>

      <div className={classes.CountryGroup}>
        <h2>Region</h2>
        <select className={classes.Select}>
          <option value="selectRegion"> Select Region</option>
          <option value="selectRegion"> Northern Region</option>
          <option value="selectRegion"> Greater Accra</option>
          <option value="selectRegion"> Kumasi</option>
        </select>
        <ul>
          <li>Northern Region</li>
          <li>Greater Accra</li>
          <li>Kumasi</li>
       </ul>
      </div>

      <div className={classes.CountryGroup}>
        <h2>Areas</h2>
        <ul>
          <li>Tamale</li>
          <li>Hausa Zongo</li>
        </ul>
      </div>
    </aside>
  )
}
export default SideNav
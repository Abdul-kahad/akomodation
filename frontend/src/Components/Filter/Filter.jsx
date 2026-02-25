import classes from './Filter.module.css'


const Filter = () => {
  return(
    <div className={classes.Filter}>
      <input className={classes.SearchInput} type="search" placeholder="Search for room" />
      <div className={classes.FilterGroup}>
        <div className={classes.FilterItem}> <i className="fas fa-filter"></i> Filter</div>
        <div className={classes.FilterItem}> <i className="fas fa-sort-amount-down"></i> Order</div>
        <div className={classes.FilterItem}> <i className="fas fa-money-bill-wave"></i> Price Range</div>
        <div className={classes.FilterItem}> <i className="fas fa-map-marker-alt"></i> Location</div>
        <div className={classes.FilterItem}> <i className="fas fa-users"></i> Capacity</div>
      </div>
    </div>
  )
}
export default Filter
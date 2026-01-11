import classes from './Filter.module.css'


const Filter = () => {
  return(
    <div className={classes.Filter}>
      <input className={classes.SearchInput} type="search" placeholder="Search for room"/>
      <div className={classes.FilterGroup}>
        <div className={classes.FilterItem}>Filter</div>
        <div className={classes.FilterItem}>Order</div>
        <div className={classes.FilterItem}>Price Range</div>
        <div className={classes.FilterItem}>Location</div>
        <div className={classes.FilterItem}>Capacity</div>
      </div>
    </div>
  )
}
export default Filter
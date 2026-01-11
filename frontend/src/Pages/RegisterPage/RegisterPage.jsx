import classes from './RegisterPage.module.css'

const RegisterPage = () =>{
  return(
    <div className={classes.RegisterPage}>
      <div className={classes.FormContainer}>
        <div className={classes.Welcome}>
          <h2>Welcome</h2>
          <p>Find a place you can call home, sign up to secure yours</p>
          <img className={classes.Img} src alt="" />
          <span>
            <small>Already have an account?<a href="#">Login</a></small>
          </span>
        </div>
        <form className={classes.Form}>
          <h2>Register</h2>
          <label>Username</label>
          <input type="text" placeholder='e.g Abdul kahad'/>
          <label>Country</label>
          <input type="text" placeholder='e.g Ghana'/>
          <label>Email</label>
          <input type="text" placeholder='e.g abdulkahad0500@gmail.com'/>
          <label>Phone</label>
          <input type="text" placeholder='e.g +233 ### ### ###'/>
          <label>Password</label>
          <input type="text" placeholder='******'/>
          <label>Confirm password</label>
          <input type="text" placeholder='******'/>
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}
export default RegisterPage
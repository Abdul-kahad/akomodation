import classes from './LoginPage.module.css'

const LoginPage = () =>{
  return(
    <div className={classes.LoginPage}>
      <div className={classes.FormContainer}>
        <div className={classes.Welcome}>
          <h2>Welcome Back</h2>
          <p>Take a look at your space and keep contact</p>
          <img className={classes.Img} src alt="" />
          <span>
            <small>Don't have an account?<a href="#">Register</a></small>
          </span>
        </div>
        <form className={classes.Form}>
          <h2>Login</h2>
          <label>Email/Phone</label>
          <input type="text" placeholder='Enter email or Phone number'/>
          <label>Password</label>
          <input type="text" placeholder='******'/>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}
export default LoginPage
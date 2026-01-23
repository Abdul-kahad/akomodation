import classes from './LoginPage.module.css'
import Axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const LoginPage = () =>{
  const navigate = useNavigate()
  
  const [ formData, setFormData ] = useState({})
  const [ serverMSG, setServerMSG ] = useState('')

  const LoginHandler = async (e) =>{
    e.preventDefault()
    try {
      const response = await Axios.post('http://localhost:3000/api/login', formData)
      setServerMSG(response.data.message)
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('userRole', response.data.user.role)
      navigate('/')
      alert(response.data.message)
    } catch (error) {
      console.log(`An error occure: ${error}`)
      setServerMSG('Login failed' || error.data.message)
    }
  }

  return(
    <div className={classes.LoginPage}>
      <div className={classes.FormContainer}>
        <div className={classes.Welcome}>
          <h2>Welcome Back</h2>
          <p>Take a look at your space and keep contact</p>
          <img className={classes.Img} />
          <span>
            <NavLink to='/register'><small>Don't have an account? Register</small></NavLink>
          </span>
        </div>
        <form className={classes.Form} onSubmit={(e) => LoginHandler(e)}>
          <h2>Login</h2>
          {serverMSG ?? <p>{serverMSG}</p> }
          <label>Email</label>
          <input 
            type="email" 
            placeholder='Enter your email'
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            value={ formData.email }/>
          <label>Password</label>
          <input 
            type="password" 
            placeholder='******'
            onChange={(e) => setFormData({...formData, password: e.target.value})}/>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}
export default LoginPage
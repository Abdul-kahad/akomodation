import classes from './LoginPage.module.css'
import Axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

const [ formData, setFormData ] = useState({})
const [ serverMSG, setServerMSG ] = useState('')

const LoginPage = () =>{

  const LoginHandler = async (e) =>{
    e.preventDefault
    try {
      const response = await Axios.post('http://localhost:3000/api/login', formData)
      setServerMSG(response.message)
      navigate('/')
      alert(serverMSG)
    } catch (error) {
      console.log(`An error occure: ${error}`)
      throw new Error(error)
    }
  }

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
          {serverMSG ?? <p>{serverMSG}</p> }
          <label>Email</label>
          <input 
            type="text" 
            placeholder='Enter your email'
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            value={ formData.email }/>
          <label>Password</label>
          <input 
            type="text" 
            placeholder='******'
            onChange={(e) => setFormData({...formData, password: e.target.value})}/>
          <button onClick={(e) => LoginHandler(e)}>Login</button>
        </form>
      </div>
    </div>
  )
}
export default LoginPage
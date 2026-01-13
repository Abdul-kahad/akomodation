import { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import classes from './RegisterPage.module.css'

const navigate = useNavigate()

const [ formData, setFormData] = useState({})
const [ serverMSG, setServerMSG ] = useState('')

const RegisterPage = () =>{

  const registerHandler = async (e) =>{
    e.preventDefault
    try {
      const response = await Axios.post('http://localhost:3000/api/register', formData)
      setServerMSG(response.message)
      navigate('/api/login')
      alert(serverMSG)
    } catch (error) {
      console.log(`An error occure: ${error}`)
      throw new Error(error)
    }
}

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
          { serverMSG ?? <p>{serverMSG}</p>}
          <label>Username</label>
          <input 
            type="text" 
            placeholder='e.g Abdul kahad' 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            value={formData.name}/>
          <label>Country</label>
          <input 
            type="text" 
            placeholder='e.g Ghana'
            onChange={(e) => setFormData({...formData, country: e.target.value})}
            value={formData.country}/>
          <label>Email</label>
          <input 
            type="text" 
            placeholder='e.g abdulkahad0500@gmail.com'
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            value={formData.email}/>
          <label>Phone</label>
          <input 
            type="text" 
            placeholder='e.g +233 ### ### ###'
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            value={formData.phone}/>
          <label>Password</label>
          <input 
            type="text" 
            placeholder='******'
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            value={formData.password}/>
          <label>Confirm password</label>
          <input 
            type="text" 
            placeholder='******'
            onChange={(e) => setFormData({...formData, cpassword: e.target.value})}
            value={formData.cpassword}/>
          <button onClick={(e) => registerHandler(e)}>Register</button>
        </form>
      </div>
    </div>
  )
}
export default RegisterPage
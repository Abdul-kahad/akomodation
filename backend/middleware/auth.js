const User = require('../models/userModel')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  const { name, email, phone, password } = req.params
  if(!name || !email || !phone || !password) return res.status(401).json({message: 'Please enter all fields'})
  if(await User.find(email)) return res.status(409).json({message: 'Email already used'})
  try {
    const Salt = bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hash(password, Salt)
    const user = await User.createOne({ name, email, phone, hashedPassword }) 
    res.status(201).json({ message: 'Registration successful', user: user.name})
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log(`Registeration error: ${error}`)
  }
}

const login = async (req, res) => {
  const { email, password } = req.params
  if(!email, !password) return res.status(401).json({message: 'Please enter all fields'})
  try {
    const user = await User.findOne({email}, '+password')
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid) return res.status(403).json({message: 'Wrong email or password'})
    res.status(200).json({message: 'Loggin successful', user: user.name})
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log(`Registeration error: ${error}`)
  }
  res.status(200).json({
    message: 'Loggin successful'
  })
}

const logout = (req, res) => {
  const { uid } = req.params
  res.status(200).json({
    message: 'Logout successful'
  })
}

module.exports = {
  register,
  login,
  logout
}
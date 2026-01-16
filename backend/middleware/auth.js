const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

const register = async (req, res) => {
  const { name, country, email, phone, password, cpassword } = req.body
  if(!name || !country || !email || !phone || !password || !cpassword) return res.status(400).json({message: 'Please enter all fields'})
  const existingUser = await User.findOne({email})
  if(existingUser) return res.status(409).json({message: 'Email already used'})
  try {
    if(password != cpassword) return res.status(403).json({message: 'Passwords do not match'})
    const Salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, Salt)
    const user = await User.create({ name, country, email, phone, password: hashedPassword }) 
    res.status(201).json({ message: 'Registration successful'})
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log(`Registeration error: ${error}`)
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  if(!email || !password) return res.status(400).json({message: 'Please enter all fields'})
  try {
    const user = await User.findOne({ email }).select('+password')
    if (!user) return res.status(401).json({ message: 'Wrong credentials' })
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid) return res.status(403).json({message: 'Wrong credentials'})
    const accessToken = await JWT.sign({user: {name: user.name, id: user._id, role: user.role} }, process.env.ACCESS_TOKEN, {expiresIn: '30m'})
    res.status(200).json({
      message: 'Loggin successful', 
      user: {
        id: user._id,
        name: user.name,
        country: user.country,
        email: user.email,
        phone: user.phone,
        role: user.role
      },
     accessToken})
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log(`Login error: ${error}`)
  }
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
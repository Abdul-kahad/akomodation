const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const Logs = require('../models/logsModel')

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
    const Log = await Logs.create({user: user._id, log:`User with id ${user._id}, is registerd`})
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
    const accessToken = JWT.sign({user: {id: user._id} }, process.env.ACCESS_TOKEN, {expiresIn: '30m'})
    const refreshToken = JWT.sign({userId: user._id}, process.env.REFRESH_TOKEN, {expiresIn: '1d'})
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    res.status(200).json({
      message: 'Loggin successful',
      user: { role: user.role },
      accessToken})
      const Log = await Logs.create({user: user._id, log:`User with id ${user._id}, is logged in`})
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log(`Login error: ${error}`)
  }
}

const refresh = async (req, res) => {
  const cookie = req.cookie
  if(!cookie?.jwt) return res.status(401).json({message: 'Unauthorized'})
  const refreshToken = cookie.jwt

 try {
  const decoded = JWT.verify(refreshToken, process.env.REFRESH_TOKEN)
  const foundUser =  await User.findOne({_id: decoded._id})
  if(!foundUser) return res.status(401).json({message: 'Unauthorized'})
  const accessToken = JWT.sign({user: {id: foundUser._id} }, process.env.ACCESS_TOKEN, {expiresIn: '30m'})
  res.status(200).json({
    user: { role: foundUser.role },
    accessToken
  })
 } catch (error) {
  console.log(`Error cannot verify token: ${error}`)
  res.status(403).json({message: 'Forbidden'})
 }
}

const logout = (req, res) => {
  const cookie = req.cookie
  if(!cookie?.jwt) return res.status(204)
  res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true })
  res.status(200).json({message: 'Cookie cleared'})
}

module.exports = {
  register,
  login,
  logout,
  refresh
}
const JWT = require('jsonwebtoken')
const User = require('../models/userModel')

const authenticate = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization?.split(' ')[1]
    if(!accessToken) return res.status(401).json({message: 'No token'})
    const decoded = JWT.verify(accessToken,process.env.ACCESS_TOKEN)
    const userId = decoded.user.id
    const isValidUser = await User.findById(userId).select('-password')
    if(!isValidUser) return res.status(400).json({message: 'Please login, invalid user'})
    req.user = isValidUser
    // console.log(`Authenticated user: ${isValidUser}`, accessToken, decoded)
    next()
  } catch (error) {
    res.status(401).json({message: 'Invalid token or expired token'})
    console.log(`Authentication error: ${error}`)
  }
}
module.exports = {
  authenticate
}
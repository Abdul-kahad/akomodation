const User = require('../models/userModel')

const getUsers = async (req, res) => {
  const userRole = req.user.role
  if (userRole !== 'admin') {
    return res.status(403).json({ message: 'Access denied' })
  }
  try {
    const users = await User.find({}, { password: 0 })
    res.status(200).json(users)
    // console.log(users)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' })
  }
}

module.exports = {
  getUsers
}
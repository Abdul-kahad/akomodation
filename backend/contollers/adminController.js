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

const SuspendUser = async (req, res) => {
  const userRole = req.user.role
  if (userRole !== 'admin') {
    return res.status(403).json({ message: 'Access denied' })
  }
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    user.suspended = req.params.action === 'true'
    await user.save()
    res.status(200).json({ message: `User ${req.params.action === 'true' ? 'suspended' : 'unsuspended'} successfully` })
  } catch (error) {
    res.status(500).json({ message: 'Failed to suspend user' })
  }
}

const deleteUser = async (req, res) => {
  const userRole = req.user.role
  if (userRole !== 'admin') {
    return res.status(403).json({ message: 'Access denied' })
  }
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user' })
  }
}

module.exports = {
  getUsers,
  SuspendUser,
  deleteUser
}
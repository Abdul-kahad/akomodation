const Room = require('../models/roomsModel')
const User = require('../models/userModel')

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find()
    res.status(200).json({ rooms })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rooms' })
  }
}

const getSingleRoom = async (req, res) => {
  const { roomId } = req.params
  try {
    const room = await Room.findById(roomId)
    if (!room) return res.status(404).json({ message: 'Room not found' })
    res.status(200).json(room)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching room' })
  }
}

const userProfile = (req, res) => {
  res.status(200).json(req.user)
}

const userProfileSettings = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password')
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user details' })
  }
}

const bookRoom = async (req, res) => {
  const { roomId } = req.params
  const userId = req.user._id

  try {
    const room = await Room.findById(roomId)
    if (!room) {
      return res.status(404).json({ message: 'Room not found' })
    }
    if (room.booked) {
      return res.status(400).json({ message: 'Room already booked' })
    }
    room.booked = true
    room.owner = userId
    await room.save()
    res.status(200).json({
      message: 'Room booked successfully'
    })
  } catch (error) {
    res.status(500).json({ message: 'Error booking room' })
  }
}


const bookedRoom = async (req, res) => { 
  const userId = req.user._id
  try {
    const room = await Room.find({ owner: userId })
    res.status(200).json(room)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching booked room' })
  }
}

const unBookedRoom = async (req, res) => {
  const { roomId } = req.params
  const userId = req.user._id

  try {
    await Room.findByIdAndUpdate(roomId, { booked: false, owner: null })
    res.status(200).json({ message: 'Room unbooked successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error unbooking room' })
  }
}

const terminateContract = (req, res) => {
  res.status(200).json({
    message: 'Follow the process to terminate contract'
  })
}

module.exports = {
  getAllRooms,
  getSingleRoom,
  userProfile,
  userProfileSettings,
  bookRoom,
  bookedRoom,
  unBookedRoom,
  terminateContract
}
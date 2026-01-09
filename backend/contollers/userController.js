const RoomModel = require('../models/roomsModel')

const getAllRooms = async (req, res) => {
  try {
    const rooms = await RoomModel.find()
    res.status(200).json({rooms})
  } catch (error) {
    res.status(500).json({message: 'Error fetching rooms'})
  }
}

const getSingleRoom = (req, res) => {
  const roomId = req.params.roomId
  res.status(200).json({selectedRoom:{
    id: roomId,
    message: `This room id is ${roomId}`
  }})
}

const userProfile = (req, res) => {
  const uid = req.user.uid
  res.status(200).json({message: `Welcome to your profile ${uid}`})
}

const userProfileSettings = (req, res) => {
  const uid = req.user.uid
  res.status(200).json({message: `Edite your profile ${uid}`})
}

const bookRoom = (req, res) => {
  const uid = req.user.uid
  const roomId = req.params.roomId
  res.status(200).json({message: `You booked room ${roomId}`})
}

const bookedRoom = (req, res) => {
  const uid = req.user.uid
  res.status(200).json({message: 'You have no room'})
}

const unBookedRoom = (req, res) => {
  const uid = req.user.uid
  res.status(200).json({message: 'You unbook the room'})
}

const terminateContract = (req, res) => {
  const uid = req.user.uid
  res.status(200).json({message: 'Follow the process to terminate contract'})
}
 
module.exports = {
  getAllRooms,
  getSingleRoom,
  userProfile,
  userProfileSettings,
  bookRoom,
  bookedRoom,
  terminateContract,
  unBookedRoom
}
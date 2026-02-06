const Room = require('../models/roomsModel')

const getRooms = async(req, res) => {
  // console.log(0)
  const userId = req.user._id
  try {
    // console.log(1)
    const rooms = await Room.find({landlord: userId})
    // console.log(rooms)
    if(rooms.length === 0) return res.json({message: 'You have no Rooms yet'})
    res.status(200).json(rooms)
    // console.log(rooms)
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log('Adding room error:', error)
  }
}

const addRoom = async(req, res) => {
  const { roomTitle, roomDescription, roomLocation, roomPrice, roomQuantity } = req.body
  if( !roomTitle || !roomDescription || !roomLocation || !roomPrice || !roomQuantity) return res.status(400).json({message: 'Please enter all fields'})
  try {
    const room = await Room.create({landlord: req.user._id, roomTitle, roomDescription, roomLocation, roomPrice, roomQuantity})
    res.status(201).json({message: 'Room added successful', room})
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log('Adding room error:', error)
  }
}
 
const updateRoom = async(req, res) => {
  const { roomTitle, roomDescription, roomLocation, roomPrice, roomQuantity } = req.body
  const { roomId } = req.params
  try {
    const room = await Room.findById(roomId)
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    const updatedRoom = {
      roomTitle: roomTitle || room.roomTitle,
      roomDescription: roomDescription || room.roomDescription , 
      roomLocation: roomLocation || room.roomLocation,
      roomPrice: roomPrice || room.roomPrice, 
      roomQuantity: roomQuantity || room.roomQuantity
    }
    await Room.findByIdAndUpdate(roomId, updatedRoom)
    res.status(200).json({message: 'Room updated successful', updatedRoom})
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log(`Update room error: ${error}`)
  }
} 

const deleteRoom = async(req, res) => {
  const { roomId } = req.params
  const userId = req.user._id
  try {
    const room = await Room.findById(roomId)
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    if(room.landlord.toString() !== userId.toString()) return res.status(403).json({message: 'You are not authorized to delete this room'})
    await Room.deleteOne({_id: roomId})
    res.status(200).json({message: 'Room deleted successful'})
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log(`Delete room error: ${error}`)
  }
}

module.exports = {
  getRooms,
  addRoom,
  updateRoom,
  deleteRoom
}
const Room = require('../models/roomsModel')

const addRoom = async(req, res) => {
  const { roomTitle, roomDescription, roomLocation, roomPrice, roomQuantity } = req.body
  if( !roomTitle || !roomDescription || !roomLocation || !roomPrice || !roomQuantity) return res.status(400).json({message: 'Please enter all fields'})
  try {
    const room = await Room.create({owner: req.user._id, roomTitle, roomDescription, roomLocation, roomPrice, roomQuantity})
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
  try {
    const room = await Room.findById(roomId)
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    await Room.deleteOne({_id: roomId})
    res.status(200).json({message: 'Room deleted successful'})
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log(`Delete room error: ${error}`)
  }
}

module.exports = {
  addRoom,
  updateRoom,
  deleteRoom
}
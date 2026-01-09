const RoomModel = require('../models/roomsModel')

const addRoom = async(req, res) => {
  const { roomTitle, roomDescription, roomLocation } = req.body
  if( !roomTitle || !roomDescription || !roomLocation) return res.status(400).json({message: 'Please enter all fields'})
  try {
    const room = await RoomModel.create({roomTitle, roomDescription, roomLocation})
    res.status(201).json({message: 'Room added successful', room})
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log('Adding room error:', error)
  }
}

const updateRoom = async(req, res) => {
  const { roomTitle, roomDescription, roomLocation } = req.body
  const { roomId } = req.params
  try {
    const room = await RoomModel.findById(roomId)
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    const updatedRoom = {
      roomTitle: roomTitle || room.roomTitle,
      roomDescription: roomDescription || room.roomDescription , 
      roomLocation: roomLocation || room.roomLocation
    }
    await RoomModel.findByIdAndUpdate(roomId, updatedRoom)
    res.status(200).json({message: 'Room updated successful', updatedRoom})
  } catch (error) {
    res.status(500).json({message: 'Internal or server error'})
    console.log(`Update room error: ${error}`)
  }
} 

const deleteRoom = async(req, res) => {
  const { roomId } = req.params
  try {
    const room = await RoomModel.findById(roomId)
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    await RoomModel.deleteOne({_id: roomId})
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

const getAllRooms = (req, res) => (
  res.status(200).json('Hello Akomodation kahad')
)

const getSingleRoom = (req, res) => {
  const roomId = req.params.roomId
  res.status(200).json({selectedRoom:{
    id: roomId,
    message: `This room id is ${roomId}`
  }})
}

module.exports = {
  getAllRooms,
  getSingleRoom
}
const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
  roomTitle:{
    type: String,
    required: true
  },
  roomDescription:{
    type:String,
    required: true
  },
  roomLocation:{
    type: String,
    required: true
  },
  booked: {
    type: Boolean,
    default: false
  }
},{
  timestamp: true
})

module.exports = mongoose.model('RoomModel', roomSchema)
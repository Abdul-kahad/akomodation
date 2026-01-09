const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
  roomTitle:{
    type: String,
    required: true,
    trim: true
  },
  roomDescription:{
    type:String,
    required: true,
    trim: true
  },
  roomLocation:{
    type: String,
    required: true,
    trim: true
  },
  booked: {
    type: Boolean,
    default: false
  }
},{
  timestamps: true
})

module.exports = mongoose.model('RoomModel', roomSchema)
const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
  landlord: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
  tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      index: true,
    },
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
  roomPrice:{
    type: Number,
    required: true
  },
  roomQuantity:{
    type: Number,
    required: true
  },
  booked: {
    type: Boolean,
    default: false
  }
},{
  timestamps: true
})

module.exports = mongoose.model('Room', roomSchema)
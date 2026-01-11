
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
    },
  name: {
    type: String,
    required: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone:{ 
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true,
    select: false
  },
  role:{
    type: String,
    default: 'user'
  }
},
  {
    timestamps: true 
  }
)

module.exports = mongoose.model('User', userSchema)
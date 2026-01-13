
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
    },
  name: {
    type: String,
    required: true,
    index: true,
    trim: true
  },
  country:{
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  phone:{ 
    type: String,
    required: true,
    trim: true
  },
  password:{
    type: String,
    required: true,
    select: false,
    trim: true
  },
  role:{
    type: String,
    enum: ['user', 'moderator', 'admin'],
    default: 'user'
  }
},
  {
    timestamps: true 
  }
)

module.exports = mongoose.model('User', userSchema)
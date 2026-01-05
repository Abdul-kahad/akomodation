
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
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
  }
},
  {
    timestamp: true 
  }
)

module.exports = mongoose.model('User', userSchema)

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    typeof: String,
    required: true,
    indexed: true
  },

  email: {
    typeof: String,
    required: true,
    unique: true
  },
  phone:{ 
    typeof: String,
    required: true
  },
  password:{
    typeof: String,
    required: true,
    return: false
  }
},
  {
    timestamp: true 
  }
)

module.exports = mongoose.Model('User', userSchema)
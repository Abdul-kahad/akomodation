const mongoose = require('mongoose')

const logsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  log:{
    type: String,
    default: '',
    required: true,
    index: true
  }
},{
  timestamps: true
})

module.exports = mongoose.model('Logs', logsSchema)
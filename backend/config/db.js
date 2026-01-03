
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const database = async() => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('Connected to database')
} catch (error) {
  console.log('Failed connecting to database', error)
  process.exit(1)
}
}

module.exports = database
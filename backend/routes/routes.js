const express = require('express')
const router = express.Router()

const { getAllRooms, getSingleRoom} = require('../contollers/userController') 

router.get('/', getAllRooms)

router.get('/room/:roomId', getSingleRoom)

module.exports = router
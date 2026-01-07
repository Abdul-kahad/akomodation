const express = require('express')
const { authenticate } = require('../middleware/authenticateMiddleware')
const router = express.Router()

const { register, login, logout } = require('../middleware/auth')
const { getAllRooms, getSingleRoom, userProfile, userProfileSettings, bookRoom, bookedRoom, unBookedRoom, terminateContract, } = require('../contollers/userController') 

router.get('/', authenticate, getAllRooms)

router.get('/room/:roomId', getSingleRoom)

router.post('/api/register', register)

router.post('/api/login', login) 

router.delete('/api/logout', logout)

router.get('/api/user/profile', userProfile)

router.put('/api/user/profile/settings', userProfileSettings)

router.post('/api/user/room/:roomId', bookRoom)

router.get('/api/user/room/:roomId', bookedRoom)

router.delete('/api/user/room/:roomId', unBookedRoom)

router.delete('/api/user/terminatecontract', terminateContract)


module.exports = router
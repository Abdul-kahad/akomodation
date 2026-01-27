const express = require('express')
const router = express.Router()

const { authenticate } = require('../middleware/authenticateMiddleware')
const { authorize } = require('../middleware/authorizeMiddleware')

const { register, login, logout } = require('../middleware/auth')

const { getAllRooms, getSingleRoom, userProfile, userProfileSettings, bookRoom, bookedRoom, unBookedRoom, terminateContract } = require('../contollers/userController')

const { addRoom, updateRoom, deleteRoom } = require('../contollers/moderatorController')

router.post('/api/register', register)
router.post('/api/login', login)
router.delete('/api/logout', authenticate, logout)

router.get('/', getAllRooms)
router.get('/rooms/:roomId', getSingleRoom)

router.get('/api/user/profile', authenticate, userProfile) 
router.get('/api/user/profile/settings', authenticate, userProfileSettings)

router.put('/api/user/bookroom/:roomId', authenticate, bookRoom)
router.get('/api/user/bookedrooms', authenticate, bookedRoom)
router.delete('/api/user/unbookroom/:roomId', authenticate, unBookedRoom)

router.delete('/api/user/terminatecontract', authenticate, terminateContract)

router.post('/api/moderator/rooms', authenticate, authorize(['admin', 'moderator']), addRoom)

router.put('/api/moderator/rooms/:roomId', authenticate, authorize(['admin', 'moderator']), updateRoom)

router.delete( '/api/moderator/rooms/:roomId', authenticate, authorize(['admin']), deleteRoom)

module.exports = router
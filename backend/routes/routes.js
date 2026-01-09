const express = require('express')
const { authenticate, } = require('../middleware/authenticateMiddleware')
const { authorize } = require('../middleware/authorizeMiddleware')
const router = express.Router()

const { register, login, logout } = require('../middleware/auth')
const { getAllRooms, getSingleRoom, userProfile, userProfileSettings, bookRoom, bookedRoom, unBookedRoom, terminateContract, } = require('../contollers/userController')
const { addRoom, updateRoom, deleteRoom } = require('../contollers/moderatorController')

router.get('/', getAllRooms)

router.get('/room/:roomId', getSingleRoom)

router.post('/api/moderator/addroom', authenticate, authorize(['admin', 'moderator']), addRoom)

router.put('/api/moderator/updateroom/:roomId', authenticate, authorize(['admin', 'moderator']), updateRoom)

router.delete('/api/moderator/deleteroom/:roomId', authenticate, authorize(['admin']), deleteRoom)

router.post('/api/register', register)

router.post('/api/login', login) 

router.delete('/api/logout', logout)

router.get('/api/user/profile',authenticate, userProfile)

router.get('/api/user/profile/settings',authenticate, userProfileSettings)

router.post('/api/user/room/:roomId',authenticate, bookRoom)

router.get('/api/user/room/:roomId',authenticate, bookedRoom)

router.delete('/api/user/room/:roomId',authenticate, unBookedRoom)

router.delete('/api/user/terminatecontract',authenticate, terminateContract)


module.exports = router
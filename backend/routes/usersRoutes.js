const express = require('express')
const router = express.Router()
const { postUser, loginUser, getUser } = require('../controllers/usersController')
const protect = require('../middleware/authMiddleware')

router.post('/', postUser)

router.post('/login', loginUser)

router.get('/datos', protect, getUser)

module.exports = router
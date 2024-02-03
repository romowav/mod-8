const express = require('express')
const router = express.Router()
const { postUser, loginUser, getUser } = require('../controllers/usersController')

router.post('/', postUser)

router.post('/login', loginUser)

router.get('/datos', getUser)

module.exports = router
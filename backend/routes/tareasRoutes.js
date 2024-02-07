const express = require('express')
const router = express.Router()
const { getTareas, postTareas, putTareas, deleteTareas } = require('../controllers/tareasController')
const protect = require('../middleware/authMiddleware')

router.get('/', protect, getTareas)

router.post('/', protect, postTareas)

router.put('/:id', protect, putTareas)

router.delete('/:id', protect, deleteTareas)

module.exports = router
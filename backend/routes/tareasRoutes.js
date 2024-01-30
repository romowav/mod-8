const express = require('express')
const router = express.Router()
const { getTareas, postTareas, putTareas, deleteTareas } = require('../controllers/tareasController')

router.get('/', getTareas)

router.post('/', postTareas)

router.put('/:id', putTareas)

router.delete('/:id', deleteTareas)

module.exports = router
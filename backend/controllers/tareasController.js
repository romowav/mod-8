const asyncHandler = require('express-async-handler')

const getTareas = asyncHandler( async (req, res) => {
  res.status(200).json({message: 'get tareas controller'})
})

const postTareas = asyncHandler( async (req, res) => {
  if(!req.body.description){
    res.status(400)
    throw new Error('agrega una description CONTROLLER')
  }
  res.status(201).json({message: 'tarea creada!'})
})

const putTareas = asyncHandler( async (req, res) => {
  res.status(200).json({message: `CONTROLER modifique la tarea con id ${req.params.id}`})
})

const deleteTareas = asyncHandler( async (req, res) => {
  res.status(200).json({message: ` CONTROLLER borre la tarea con id ${req.params.id}`})
})

module.exports = { getTareas, postTareas, putTareas, deleteTareas }
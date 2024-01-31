const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler( async (req, res) => {

  const tareas = await Tarea.find()
  res.status(200).json(tareas)

})

const postTareas = asyncHandler( async (req, res) => {

  if(!req.body.description){
    res.status(400)
    throw new Error('agrega una description CONTROLLER')
  }
  
  const tarea = await Tarea.create({description: req.body.description})
  res.status(201).json(tarea)
})

const putTareas = asyncHandler( async (req, res) => {

  const tarea = await Tarea.findById(req.params.id)
  if(!tarea){
    res.status(400)
    throw new Error(`No encontre la tarea con el id: ${req.params.id}`)
  }

  const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.status(200).json(tareaUpdated)
})

const deleteTareas = asyncHandler( async (req, res) => {

  const tarea = await Tarea.findById(req.params.id)
  if(!tarea){
    res.status(400)
    throw new Error(`No encontre la tarea con el id: ${req.params.id}`)
  }

  await Tarea.deleteOne(tarea)
  res.status(200).json({id: req.params.id})
})

module.exports = { getTareas, postTareas, putTareas, deleteTareas }
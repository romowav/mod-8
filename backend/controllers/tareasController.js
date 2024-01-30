const getTareas = (req, res) => {
  res.status(200).json({message: 'get tareas controller'})
}

const postTareas = (req, res) => {
  res.status(201).json({message: 'get tareas sip'})
}

const putTareas = (req, res) => {
  res.status(200).json({message: `CONTROLER modifique la tarea con id ${req.params.id}`})
}

const deleteTareas = (req, res) => {
  res.status(200).json({message: ` CONTROLLER borre la tarea con id ${req.params.id}`})
}

module.exports = { getTareas, postTareas, putTareas, deleteTareas }
const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
  description: {
    type: String,
    require: [true, 'Por favor agrega una description']
  },
}, {
    timestamps: true
}) 

module.exports = mongoose.model('Tarea', tareaSchema)
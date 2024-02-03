const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
  description: {
    type: String,
    require: [true, 'Por favor agrega una description']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  }
}, {
    timestamps: true
}) 

module.exports = mongoose.model('Tarea', tareaSchema)
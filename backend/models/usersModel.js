const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Tienes que agregar un nombre']
  },
  email: {
    type: String,
    require: [true, 'Tienes que agregar un email'],
    unique: [true, 'Este correo ya existe en nuestra DB']
  },
  password: {
    type: String,
    require: [true, 'Tienes que agregar una contraseña']
  },
  esAdmin: {
    type: Boolean,
    default: false
  }
},{
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)
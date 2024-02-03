const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const postUser = asyncHandler(async (req, res) => {

  // desestructuramos el body
  const {name,email,password} = req.body

  if(!name || !email || !password){
    res.status(400)
    throw new Error('hacen falta campos requeridos')
  }

  //verificacion que el email no exista en DB
  const userExiste = await User.findOne({email})
  if (userExiste) {
    res.status(400)
    throw new Error('Ya existe un user con ese email')
  }

  // Hacemos el HASH del password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Crear el user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if (user){
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Sucedio un error al crear el user')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  res.status(201).json({message: 'login Usuario'})
})

const getUser = asyncHandler(async (req, res) => {
  res.status(201).json({message: 'get datos Usuario'})
})

module.exports = {
  postUser,
  loginUser,
  getUser
}
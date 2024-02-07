const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
    //  Obtenemos el token
    token = req.headers.authorization.split(' ')[1]

    // verificamos el token atra ves de la firma
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // obtener los datos del user del token, que pase a travez de payload
    req.user = await User.findById(decoded.id_user).select('-password')

    next()

    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Access denied')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Access not authorized, no token provided')
  }
})

module.exports = protect
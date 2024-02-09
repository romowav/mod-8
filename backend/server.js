const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const errorHandler = require('./middleware/errorMiddleware.js')
const cors = require('cors')

const app = express()

app.use(cors())

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`servidor inizializado en el puerto ${port}`))
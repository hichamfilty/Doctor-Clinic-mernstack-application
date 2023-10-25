const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')
require('dotenv').config()

const uri = process.env.URI 

mongoose.connect(uri, { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true, useCreateIndex: true }, () => {console.log('database server is running')})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(session({
  secret: 'fresh taost',
  store: MongoStore.create({
    mongoUrl: process.env.URI,
    collectionName: 'session'
  }),
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
require('./passport')(passport)

app.use('/auth', require('./routes/users'))
app.use('/api/doctors', require('./routes/doctors'))
app.use('/api/clinics', require('./routes/clinics'))
app.use('/api/appointments', require('./routes/appointments'))
app.use('/api/attachments', require('./routes/attachments'))
app.use('/api/prescriptions', require('./routes/prescriptions'))
app.use('/api/symptoms', require('./routes/symptoms'))
app.use('/api/healthlogs', require('./routes/healthLogs'))
app.use('/api/logs', require('./routes/logs'))

const port = process.env.PORT

app.listen(port, () => {
  console.log(`express server is running on port ${port}`)
})
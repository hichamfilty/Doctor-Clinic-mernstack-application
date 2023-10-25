const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AppointementSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    trim: true,
    required: true
  },
  visitPurpose: {
    type: String,
    trim: true
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
  //add this that way it will work in req.body
  //  "": "i am very sick",
   // "": "cure me please"
})

const Appointment = mongoose.model('Appointment', AppointementSchema)

module.exports = Appointment
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DoctorSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: true
  },
  lastname: {
    type: String,
    trim: true,
    required: true
  },
  clinic: {
    type: String,
    trim: true
  },
  doctorPhone: {
    type: String,
    trim: true,
    required: true
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
})

const Doctor = mongoose.model('Doctor', DoctorSchema)

module.exports = Doctor
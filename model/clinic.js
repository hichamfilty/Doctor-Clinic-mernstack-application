const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ClinicSchema = new Schema({
  clinicname: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,                      
    required: true,
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  state: {
    type: String,
    trim: true,
    required: true,
  },
  zip: {
    type: Number,
    trim: true
  },
  phone: {
    type: Number,
    trim: true,
    match: /\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/,
    required: true,
  },
  userCreated: {
    type: Date,
    default: Date.now,
  }
})

const Clinic = mongoose.model('Clinic', ClinicSchema)

module.exports = Clinic
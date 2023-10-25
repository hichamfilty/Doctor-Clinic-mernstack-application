const mongoose = require('mongoose')

const Schema = mongoose.Schema

const prescriptionSchema = new Schema({
  prescriptionName: {
    type: String,
    trim: true,
    required: true
  },
  amount: {
    type: String,
    trim: true,
    required: true
  },                                                     
  instructions: {
    type: String,
    trim: true,
    required: true
  },
  doctorprescribed: {
    type: String,
    trim: true,
    required: true
  },
  dateprescribed: {
    type: String,
    trim: true
  }
})

const Prescription = mongoose.model('Presciption', prescriptionSchema)

module.exports = Prescription
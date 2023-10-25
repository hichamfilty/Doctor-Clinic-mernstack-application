const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HealthlogSchema = new Schema({
  date: {
    type: String,
    trim: true,
    required: true
  },
  doctor: {
    type: String,
    trim: true,
    required: true
  },
  visitPurpose: {
    type: String,
    trim: true,
    required: true
  },
  notes: {
    type: String,
    trim: true,
    required: true
  },
  heightIn: {
    type: Number,
    trim: true
  },
  weightLb: {
    type: Number,
    trim: true
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
})

const HealthLog = mongoose.model('HealthLog', HealthlogSchema)

module.exports = HealthLog
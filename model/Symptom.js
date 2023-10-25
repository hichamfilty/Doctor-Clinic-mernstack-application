const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SymptomSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: true,
  },
  date: {
    type: String,
    trim: true,
    required: true,
  },
  time: {
    type: String,
    trim: true,
    required: true,
  },

  info: {
    type: String,
    trim: true,
    required: true,
  },
})


const Symptom = mongoose.model('Symptom', SymptomSchema)

module.exports = Symptom
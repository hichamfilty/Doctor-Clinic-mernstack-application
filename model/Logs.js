const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noteSchema = new Schema({
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


const Note = mongoose.model('Note', noteSchema)

module.exports = Note
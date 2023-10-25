const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AttachmentSchema = new Schema({
  date: {
    type: Date,
    trim: true,
    required: true
  },
  doctor: {
    type: String,
    trim: true,
    required: true
  },
  subject: {
    type: String,
    trim: true,
    required: true
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
})

const Attachment = mongoose.model('Attachment', AttachmentSchema)

module.exports = Attachment
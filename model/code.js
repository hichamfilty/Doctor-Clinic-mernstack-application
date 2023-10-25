const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CodeSchema = new Schema({
  value: { type: String, required: true },
  redirectUri: {type: String, required: true },
  userId: { type: String, required: true },
  clientId: { type: String, required: true }
})

const Code = mongoose.model('Code', CodeSchema)

module.exports = Code
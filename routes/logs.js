const express = require('express')
const router = express.Router()
const noteController = require('../controller/noteController')
const isAuthenticated = require('./isAuthenticated')

router.route('/')
  .get(isAuthenticated, noteController.findAll)
  .post(noteController.create)

router.route('/:id')
  .get(noteController.findById)
  .put(noteController.update)
  .delete(noteController.remove)

module.exports = router
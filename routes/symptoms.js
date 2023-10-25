const express = require('express')
const router = express.Router()
const symptomsController = require('../controller/symptomsController')
const isAuthenticated = require('./isAuthenticated')

router.route('/')
  .get(isAuthenticated, symptomsController.findAll)
  .post(symptomsController.create)

router.route('/:id')
  .get(symptomsController.findById)
  .put(symptomsController.update)
  .delete(symptomsController.remove)

module.exports = router
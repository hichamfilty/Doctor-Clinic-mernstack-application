const express = require('express')
const router = express.Router()
const healthLogController = require('../controller/healthLogControll')
const isAuthenticated = require('./isAuthenticated')

router.route('/')
  .get(isAuthenticated, healthLogController.findAll)
  .post(healthLogController.create)

router.route('/:id')
  .get(isAuthenticated, healthLogController.findById)
  .put(healthLogController.update)
  .delete(healthLogController.remove)

module.exports = router
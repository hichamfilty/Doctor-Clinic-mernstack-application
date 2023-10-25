const express = require('express')
const router = express.Router()
const appointmentsController = require('../controller/appointmentsController')
const isAuthenticated = require('./isAuthenticated')

router.route('/')
   .get(isAuthenticated, appointmentsController.findAll)
   .post(appointmentsController.create)

router.route('/:id')
    .get(isAuthenticated, appointmentsController.findById)
    .put(appointmentsController.update)
    .delete(appointmentsController.remove)

module.exports = router
const express = require('express')
const clinicRouter = express.Router()
const clinicController = require('../controller/clinicController')
const isAuthenticated = require('./isAuthenticated')

clinicRouter.route('/')
   .get(isAuthenticated, clinicController.findAll)
   .post(clinicController.create)

clinicRouter.route('/:id')
   .get(isAuthenticated, clinicController.findById)
   .put(clinicController.update)
   .delete(clinicController.remove)

module.exports = clinicRouter
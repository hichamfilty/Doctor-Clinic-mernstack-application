const express = require('express')
const doctorRoutes = express.Router()
const isAuthenticated = require('./isAuthenticated')
const doctorController = require('../controller/doctorsController')

doctorRoutes.route('/')
    .get(isAuthenticated, doctorController.findAll)
    .post(doctorController.create)

doctorRoutes.route('/:id')
     .get(isAuthenticated, doctorController.findById)
     .put(doctorController.update)
     .delete(doctorController.remove)




module.exports = doctorRoutes


const express = require('express')
const router = express.Router()
const prescriptionsController = require('../controller/prescriptionsController')
const isAuthenticated = require('./isAuthenticated')

router.route('/')
    .get(isAuthenticated, prescriptionsController.findAll)
    .post(prescriptionsController.create)

router.route('/:id')
     .get(isAuthenticated, prescriptionsController.findById)
     .put(prescriptionsController.update)
     .delete(prescriptionsController.remove)

module.exports = router
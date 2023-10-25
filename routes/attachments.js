const express = require('express')
const router = express.Router()
const attachmentsController = require('../controller/attachmentsController')
const isAuthenticated = require('./isAuthenticated')
const { get } = require('./doctors')

router.route('/')
    .get(isAuthenticated, attachmentsController.findAll)
    .post(attachmentsController.create)

router.route('/:id')
    .get(isAuthenticated, attachmentsController.findById)
    .put(attachmentsController.update)
    .delete(attachmentsController.remove)


module.exports = router
const Prescription = require('../model/prescription')

module.exports = {
  findAll: function(req, res) {
    Prescription
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('FindAll prescription is not working'))
  },
  create: function(req, res) {
    Prescription
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('Create clinic is not working'))
  },
  findById: function(req, res) {
    Prescription
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('Findbyid prescription is not working'))
  },
  update: function(req, res) {
    Prescription
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('Update prescription is not working'))
  },
  remove: function(req, res) {
    Prescription
     .findById({_id: req.params.id}) 
     //.findByIdAndDelete(req.params.id)
     .then(dbModel => dbModel.remove())
     .then(dbModel => res.json(dbModel))
     .catch(err =>  res.status(400).json('delete doctor by id Error: ' + err))
  }
}
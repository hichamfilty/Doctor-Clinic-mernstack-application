const Appointment = require('../model/appointment')

module.exports = {
  findAll: function(req, res) {
    Appointment
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('FindAll appointment is no working'))
  },
  create: function(req, res) {
    Appointment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json('create Create appointment Error: ' + err))
  },
  findById: function(req, res){
    Appointment
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json('FindById appointment is no working'))
  },
  update: function(req, res){
    Appointment
          .findOneAndUpdate({ _id: req.params.id}, req.body)
          .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json('Update appointment is no working'))
  },
  remove: function(req, res){
   Appointment
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json('Delete appointment is no working'))
  }
}
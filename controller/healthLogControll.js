const HealthLog = require('../model/healthlog')

module.exports = {
  findAll: function(req, res){
    HealthLog
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('FindAll appointment is no working'))
  },
  create: function(req, res){
    HealthLog
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(400).json('create doctor Error: ' + err))
  },
  findById: function(req, res){
    HealthLog
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('findbyid appointment is no working'))
  },
  remove: function(req, res){
    HealthLog
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('delete appointment is no working'))
  },
  update: function(req, res) {
    HealthLog
      .findOneAndUpdate({_id: req.params.id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('update appointment is no working'))
  }
}
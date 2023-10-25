const Symptom = require('../model/Symptom')

module.exports = {
  findAll: function(req,res){
    Symptom
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('FindAll prescription is not working'))
  },
  create: function(req, res){
    Symptom
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('create prescription is not working' + err))
  },
  findById: function(req, res){
    Symptom
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('Findbyid prescription is not working'))
  },
  remove: function(req, res){
    Symptom
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('delete prescription is not working' + err))
  },
  update: function(req, res){
    Symptom
      .findOneAndUpdate({_id: req.params.id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('FindAll prescription is not working'))
  }
}
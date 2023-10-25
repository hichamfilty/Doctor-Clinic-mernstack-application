const Note = require('../model/Logs')

module.exports = {
  findAll: function(req,res){
    Note
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('FindAll prescription is not working'))
  },
  create: function(req, res){
    Note
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('create prescription is not working' + err))
  },
  findById: function(req, res){
    Note
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('Findbyid prescription is not working'))
  },
  remove: function(req, res){
    Note
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('delete prescription is not working' + err))
  },
  update: function(req, res){
    Note
      .findOneAndUpdate({_id: req.params.id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json('FindAll prescription is not working'))
  }
}
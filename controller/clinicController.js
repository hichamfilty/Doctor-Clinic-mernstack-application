const Clinic = require('../model/clinic')

module.exports = {
  findAll: function(req, res){
    Clinic
       .find(req.query)
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json('FindAll clinic is not working'))
  },
  findById: function(req, res) {
    Clinic
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => err => res.status(422).json('Findbyid clinic is not working'))
  },
  create: function(req, res){
    Clinic
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => err => res.status(422).json('Create clinic is not working'))
  },
  remove: function(req, res){
    Clinic
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel => res.json(dbModel)))
          .catch(err => err => res.status(422).json('delete clinic is not working'))
  },
  update: function(req, res){
    Clinic
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json('Update clinic is not working'))
  }
}
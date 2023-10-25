const Attachment = require('../model/attachment')

module.exports = {
  findAll: function(req, res){
      Attachment
        .find(req.query)
        .then(dbModel => res.json(dbModel))
          .catch(err => err => res.status(422).json('Findall clinic is not working'))
  },
  create: function(req, res){
      Attachment
        .create(req.body)
        .then(dbModel => res.json(dbModel))
          .catch(err => err => res.status(422).json('Create clinic is not working'))
  },
  findById: function(req, res){
      Attachment
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
          .catch(err => err => res.status(422).json('findbyid clinic is not working'))
  },
  update: function(req, res){
      Attachment
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
          .catch(err => err => res.status(422).json('Update clinic is not working'))
  },
  remove: function(req, res){
      Attachment
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json('delete clinic is not working'))
  }
}
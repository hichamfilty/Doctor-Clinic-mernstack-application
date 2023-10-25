const Doctor = require('../model/doctors')

module.exports = {
  findAll : function(req, res){
   Doctor
     .find(req.query)
     .then(dbModel => res.json(dbModel))
     .catch(err =>  res.status(400).json('findall doctor by id Error: ' + err))
  },
  findById : function(req, res) {
    Doctor
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(400).json('Find doctor by id Error: ' + err))
  },
  create: function(req, res) {
     Doctor
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json('create doctor Error: ' + err))
  },
  remove: function(req, res){
     Doctor
         .findById({_id: req.params.id}) 
         //.findByIdAndDelete(req.params.id)
         .then(dbModel => dbModel.remove())
         .then(dbModel => res.json(dbModel))
         .catch(err =>  res.status(400).json('delete doctor by id Error: ' + err))
  },
  update: function(req, res) {
       db.Doctor
           .findOneAndUpdate({_id: req.params.id}, req.body)
           .then(dbModel => res.json(dbModel))
           .catch(err =>  res.status(400).json('update doctor by id Error: ' + err))
  }
}
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {

    db.Product
      .find({})
      .sort({ date: -1 })
      .then(dbProducts => res.json(dbProducts))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {

    console.log(req.params.id)
    db.Product
      .findById({_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("made it innto create")
    db.Product
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByProductName: function(req, res) {
    console.log('+++++++++made it into find by name')
    var string = req.params.name
    db.Product
      .find({ name : { $regex: string, $options: 'i'} })
      .sort({ date: -1 })
      .then(dbProducts => res.json(dbProducts))
      .catch(err => res.status(422).json(err));
  },
  findByProductCategory: function(req, res) {
    console.log('made it into find by categoy')
    var string = req.params.category;
    db.Product
      .find({ category : { $regex: string, $options: 'i'} })
      .sort({ date: -1 })
      .then(dbProducts => res.json(dbProducts))
      .catch(err => res.status(422).json(err));
  }
};

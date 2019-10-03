const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {

    db.Cart
      .find({})
      .sort({ date: -1 })
      .then(dbProducts => res.json(dbProducts))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {

    console.log(req.params.id)
    db.Cart
      .findById({_id: req.params.id})
      .populate('products.item')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("made it innto cart create")
    db.Cart
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log('made it into update')
    db.Cart
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Cart
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

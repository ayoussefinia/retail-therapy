const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.Order
      .find({userId: req.params.id})
      .sort({ date: -1 })
      .then(dbProducts => res.json(dbProducts))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Order
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
   remove: function(req, res) {
    db.Order
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

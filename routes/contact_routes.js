'use strict';

var Contact = require('../models/Contact.js');
var bodyParser = require('body-parser');

module.exports = function(router) {
  router.use(bodyParser.json());

  router.get('/contacts', function(req, res) {
    Contact.findAll({
      attributes: ["id", "first_name", "last_name", "dob", "phone", "email", "notes" ],
      order: ["first_name", "last_name"]
    })
      .then(function(contacts) {
        res.json(contacts);
      })
  })

  router.post('/contacts', function(req, res) {
    var newContact = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      dob: req.body.dob,
      phone: req.body.phone,
      email: req.body.email,
      notes: req.body.notes
    };
    Contact.create(newContact).then(function(err) {
      res.json({msg: "Contact was successfully added!"});
    })
  })

  router.delete('/contacts/:id', function(req, res) {
    Contact.destroy({where: {id: parseInt(req.params.id)}})
          .then(function(err) {
            res.json({msg: "Contact was successfully deleted!"});
          })
  })

};

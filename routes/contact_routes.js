'use strict';

var Contact = require('../models/Contact.js');
var bodyParser = require('body-parser');

module.exports = function(router) {

  router.get('/contacts', function(req, res) {
    Contact.findAll().then(function(contacts) {
      res.json(contacts);
    })
  })

};

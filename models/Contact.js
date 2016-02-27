"use strict";

var Sequelize = require('sequelize');
var config = require('../config');
var db = new Sequelize(config.DB);

var Contact = db.define("Contact", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  notes: Sequelize.TEXT
});

Contact.sync().then(function() {
  var data = {
    first_name: "Goutham",
    last_name: "Reddy",
    phone: "650-430-5216",
    email: "gouthamvreddy@gmail.com",
    notes: "blah blah blah"
  };
  Contact.create(data).then(function(contact) {
    console.log(contact);
  })
})

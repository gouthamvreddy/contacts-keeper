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
  dob: Sequelize.DATEONLY,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  notes: Sequelize.TEXT
});

// {force: true} - Drop table if exists
Contact.sync({force: true}).then(function() {
  var data = {
    first_name: "Goutham",
    last_name: "Reddy",
    dob: "2/27/2016",
    phone: "650-430-5216",
    email: "gouthamvreddy@gmail.com",
    notes: "blah blah blah"
  };
  Contact.create(data).then(function(contact) {
    console.log(contact);
  })
})

module.exports = Contact;

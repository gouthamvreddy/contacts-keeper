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

var data = [{
  first_name: "Goutham",
  last_name: "Reddy",
  dob: "2/27/2016",
  phone: "650-430-5216",
  email: "gouthamvreddy@gmail.com",
  notes: "traveler, hiker, gradener, & engineer"
},
{
  first_name: "Johnny",
  last_name: "Appleseed",
  dob: "9/26/1774",
  phone: "260-250-8726",
  email: "johnny_apple@iCloud.com",
  notes: "missionary and gardener"
},
{
  first_name: "John",
  last_name: "Muir",
  dob: "04-21-1838",
  phone: "209-372-0200",
  email: "jmuir@sierra.org",
  notes: "engineer, naturalist, philosopher, writer, botanist, geologist"
},
{
  first_name: "John",
  last_name: "Lennon",
  dob: "10/9/1940",
  phone: "(212)504-4115",
  email: "lennon@pandora.com",
  notes: "Musician, singer, songwriter"
}];

// {force: true} - Drop table if exists
Contact.sync({force: true}).then(function() {
  Contact.bulkCreate(data).then(function(contact) {
    console.log(contact);
  })
})

module.exports = Contact;

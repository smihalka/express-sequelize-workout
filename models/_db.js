var Sequelize = require('sequelize');
 //database name! dont forget to make database
 var db = new Sequelize('postgres://localhost:5432/dogs');


module.exports = db;

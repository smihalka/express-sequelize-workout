const Sequelize = require('sequelize');
const db = require('./_db');

var Toy = db.define('toy', {
    name: {
     type: Sequelize.STRING,
      allowNull: false
    },
   type: {
    type: Sequelize.STRING,
      allowNull: false
    }
  });

 module.exports = Toy;


 // ,{
 //
 //    hooks: {
 //      beforeValidate: function () {}
 //    },
 //    getterMethods: {
 //      nameToy: function () {}
 //      },
 //    classMethods: {
 //      indByTag: function () {}
 //    },
 //    instanceMethods: {
 //      findSimilar: function () {}
 //  }
 // }

const Sequelize = require('sequelize');
const db = require('./_db');

var Dog = db.define('dog', {
    name: {
     type: Sequelize.STRING,
      allowNull: false
    },
    royalname:{
     type: Sequelize.STRING,
       allowNull: false
  },
   nickname: {
    type: Sequelize.STRING,
      allowNull: false
 },
   breed: {
    type: Sequelize.STRING,
      allowNull: false
 }
 });

 module.exports = Dog;


 // ,
 //   {
 //     hooks: {
 //       beforeValidate: function () {}
 //     },
 //     getterMethods: {
 //       nameNickname: function () {
 //         return this.name+" has a nick name of "+ this.nickname;
 //       }
 //     },
 //     classMethods: {
 //       indByTag: function () {}
 //     },
 //     instanceMethods: {
 //       findSimilar: function () {}
 //   }
 // }

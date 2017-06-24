const db = require('./_db');
const Dog = require('./dogs');
const Toy = require('./toys');

Dog.belongsToMany(Toy, {through: 'DogToy'});
Toy.belongsToMany(Dog, {through: 'DogToy'});

module.exports = {
  db,
  Toy,
  Dog
};

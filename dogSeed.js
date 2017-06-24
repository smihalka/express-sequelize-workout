var Promise = require('bluebird');
 const {db,Dog,Toy} = require("./models");

 const data = {
   dogs: [
      {  name: "Charlie", royalname: "Charles", nickname: "Chuck", breed: "Lab Hound Mix"},
      {  name: "Reggie", royalname: "Reginold", nickname: "Regy", breed: "Terrier"}
    ],
    toys:  [
      {  name: "Tennis Ball", type: "ball" },
      {  name: "Mucket Bucket", type: "doll" },
      {  name: "Gray Bunny", type: "doll" }
    ]
 };

 db.sync({force: true})
 .then(function () {
   console.log("Dropped old data, now inserting data");
   const createDogs = Promise.map(data.dogs, function (dog) {
    return Dog.create(dog);
  });
  const createToys = Promise.map(data.toys, function (toy) {
   return Toy.create(toy);
  });
  return Promise.all(createDogs,createToys)
}).then(function(){
      console.log("Finished");
}

);

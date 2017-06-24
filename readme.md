
Start by
1) setting up app
  put in body-parser __json___ craps
  put in static routs ___dirname___, public
  app(routes.....
    require the app express
    )
  nunjuks (views)
2) setting up basic route - route in index.js - set up a different route per page - make three....
3) create models - just a two table thing, with a many to many thing
  use each
    hooks
    instanceMethods
    classMethods
    getterMethods
  also belongsTo
  hasMany - lets make sure this shit happens ok? two different ways
4) nunjuks
    views are sweet
    set up index.html - start with layout.html - maybe add in that  bootstrap business?
5) scss - make sure you use that - last thing though ok? stay away from CSS and HTML until all the routes are figured

overall
Lets make a reggie and charlie app
Lets have it upload images and display them based on number of likes
these are images of reggie and charlie
there will be two users, reggie and charlie

OK


> We're living the future so
> the present is our past.
rea

http://sequelize.readthedocs.io/en/v3/
#Creating a db instance with new Sequelize and a connection string
snippet
#Creating models with db.define(modelname, fields, options)
http://sequelize.readthedocs.io/en/v3/docs/models-definition/
snippet
*Specifying schema fields (attributes)*
http://sequelize.readthedocs.io/en/v3/docs/models-definition/#data-types
*Specifying attribute types, e.g. Sequelize.STRING
Specifying attribute validations, e.g. allowNull
http://sequelize.readthedocs.io/en/v3/docs/models-definition/#validations
Specifying attribute defaultValues*

Specifying model options
#Getters & Setters (aka virtuals)
http://sequelize.readthedocs.io/en/v3/docs/models-definition/#getters-setters
Hooks, e.g. beforeValidate
Class methods
Instance methods
this value in options
getters: the instance
hooks: the model (instance is 1st arg of the hook func)
Instance methods: instance
Class methods: class
Associating models, e.g. hasOne, belongsTo, etc.
Which model has the foreignKey
Which Sequelize model is given new methods
Synchronizing models with db.sync() -- what does the option force: true do?

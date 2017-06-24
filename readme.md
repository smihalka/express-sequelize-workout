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

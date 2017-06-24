#SHAYNES README SO NOT READ YOU
 *installs*
 git init npm init npm install with pacakges --save
 #npm install bootstrap
 #npm install nodemon
 In JSON Edit 'start:production': 'node theServerFilename (likely index.js or app.js)',
 'start:dev': 'nodemon -e html,css,js theServerFilename',
 'start': 'npm run start:dev'
 #install pg pg-hstore sequelize@3 get v 3
 express.static
 npm install body-parser --save
 #version 3 Broski
 npm install sequelize@3 pg pg-hstore --save
 #createdb somename
 #DOCS
 *express* +   http://expressjs.com/en/api.html
 +   https://github.com/expressjs/body-parser
 *sequelize docs*
 +  http://sequelize.readthedocs.io/en/v3/
 #Model Defines it
 + http://sequelize.readthedocs.io/en/v3/docs/models-definition/
 *DATA TYPES*
 + http://sequelize.readthedocs.io/en/v3/docs/models-definition/#data-types
 #Validations allow null N stuff
 + http://sequelize.readthedocs.io/en/v3/docs/models-definition/#validations
 #getters-setters getterMethods setterMethods
 + http://sequelize.readthedocs.io/en/v3/docs/models-definition/#getters-setters
 *Hooks*
 + http://sequelize.readthedocs.io/en/v3/docs/hooks/
 #instanceMethods (for the instance (var/const)), classMethods (for the class (model)),
 #Associations belongsTo hasOne
 + http://sequelize.readthedocs.io/en/v3/docs/associations/
 bluebird Promises are a Bitch
 + http://bluebirdjs.com/docs/api/promise.all.html



#PLAN
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

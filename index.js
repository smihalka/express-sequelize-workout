'use strict';
 const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();
 const routes = require('./routes')
 const volleyball = require('volleyball');
 const PORT = process.env.APP_SERVER_PORT || 3000;
 const {db,Dog,Toy} = require("./models");
 app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(volleyball);
const nunjucks = require('nunjucks');
 //make sure directory name is views
 nunjucks.configure('views', {noCache: true});
 app.set('view engine', 'html');
 app.engine('html', nunjucks.render);

 // app use can route page somepage use var someRoutes = require('./routes/somepage');
 app.use('/', routes);
 // 404 handler
 app.use((req, res, next) => {
   next();
 });
 // error handling endware
 app.use((err, req, res, next) => {
   //big error err.stack
  // console.error(err.stack);
   res.status(err.status || 500);
   //remember to have an error.html page in views with nunjuks
   res.render('error', {err: err.stack});
 });
db.sync()
  .then((result) => {
    if(result)console.log("results")
  app.listen(PORT, () => console.log(`Server On PORT: ${PORT}`));
});

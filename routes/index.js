'use strict';
 var express = require('express');
 var router = express.Router();
 var bodyParser = require('body-parser');

 router.get('/', function(req, res) {

   res.render('index',{hello: 'YO'});

 });
 // //A PUT request is a way to upload a file to a server.
 // router.put('/path', function (req, res) {
 // //  res.json(toDos.complete(req.params.name,req.params.index));
 // });
 // //DELETE request will delete a resource on the server.
 // router.delete('/path',function(req, res, next) {
 // //  res.status(204).json(toDos.remove(req.params.name,req.params.index));
 // });
 // router.post('/path',function(req, res, next) {
 // //Post is fun router.post('/users/:name/tasks', function(req, res, next) {
 // //req.body
 // //req.params
 // });
 module.exports = router;

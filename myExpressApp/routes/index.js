'use strict';
var express = require('express');
var router = express.Router();

var LoginController = require('./Controllers/Login/LoginController.js');


//instance
LoginController = new LoginController();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login',function(req,res){

   LoginController.proc_login(req);

   res.end();

});

module.exports = router;

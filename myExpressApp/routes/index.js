'use strict';
var express = require('express');
var router = express.Router();

import LoginController from './Controllers/Login/LoginController.js';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login',function(req,res){

   login_controller_instance = LoginController(req,res);

   login_controller_instance.parse();

});

module.exports = router;

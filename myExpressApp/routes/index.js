
var express = require('express');
var router = express.Router();

var LoginController = require('../controllers/Login/LoginController.js');


//instance
LoginController = new LoginController();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login',function(req,res){
    
   res.json(LoginController.proc_login(req));
   res.end();

});

module.exports = router;

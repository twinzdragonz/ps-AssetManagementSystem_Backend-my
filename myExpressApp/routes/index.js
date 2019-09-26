
var express = require('express');
var router = express.Router();

var LoginController = require('../controllers/Login/LoginController.js');
var SystemController = require('../controllers/System/SystemController.js');


//instance
LoginController = new LoginController();
SystemController = new SystemController();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login',function(req,res){
    
   res.json(LoginController.proc_login(req));
   res.end();

});

router.post('/ams_system',function(req,res){
  res.json(SystemController.proc_system(req));
  res.end();
});

module.exports = router;

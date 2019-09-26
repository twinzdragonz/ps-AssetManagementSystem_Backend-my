
var express = require('express');
var router = express.Router();

var LoginController = require('../controllers/Login/LoginController.js');
var SystemController = require('../controllers/System/SystemController.js');


//instance
LoginController = new LoginController();
SystemController = new SystemController();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
}) 

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

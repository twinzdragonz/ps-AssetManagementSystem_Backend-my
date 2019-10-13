
var express = require('express');
var router = express.Router();

var LoginController = require('../controllers/Login/LoginController.js');
var LogoutController = require('../controllers/Logout/LogoutController.js');
var SystemController = require('../controllers/System/SystemController.js');

var UserAccessController = require('../controllers/UserAccess/UserAccessController.js');

// Form submit 
var FormController = require('../controllers/Form/FormController.js');

//instance
LoginController = new LoginController();
LogoutController = new LogoutController();
SystemController = new SystemController();
// Form instance 
FormController = new FormController();
UserAccessController = new UserAccessController();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
}) 

// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// login API
router.post('/api/login', async function(req,res){
    res.json(await LoginController.proc_login(req,res));
    res.end();


});

// logout API
router.post('/api/logout', async function(req,res){
    res.json(await LogoutController.proc_logout(req,res));
    res.end();
});


// User_Access
router.post('/api/user_access',async function(req,res)
{
 res.json(await UserAccessController.proc_access(req,res));
 res.end();
});


// Public Form Contact Us 
router.post('/api/contact_us', async function(req,res)
{
  res.json(await FormController.submitContactUs(req,res));
  res.end();
});



// system api
router.post('/api/public', function(req,res){
  res.json(LoginController.proc_login(req));
  res.end();
});


// system api
router.post('/api/ams_system',function(req,res){
  res.json(SystemController.proc_system(req));
  res.end();
});


// render api
router.post('/api/render',function(req,res)
{
  res.json(SystemController.proc_system(req));
  res.end();
});

module.exports = router;

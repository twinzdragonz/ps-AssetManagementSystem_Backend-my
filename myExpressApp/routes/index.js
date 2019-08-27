var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login',function(req,res){
    // receive

    this.username = req.body.req_username;
    this.password = req.body.req_password;

    console.log("Username :",username);
    console.log("Password :",password);

    // move this to api_validate and generalize it. so its reusable everytime?
    if(username == null || username == '')
    {
      console.log("Username Undefined? Data :" , req.body.req_username);
      res.json({
                 resp_code : '01',
                 resp_description : 'req_username is not presented in api'
               })
                 res.end();
    }

      res.setHeader('Content-Type', 'application/json');
      // correct respond.
      res.json({ resp_code: '00' ,
                  resp_description : 'User Validated'
                })

       res.end();
});

module.exports = router;

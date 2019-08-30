
var CF = require('../../../middleware/CommonFunctions.js')

module.exports = class LoginRequest{

    constructor(req)
    {

     //    CF = new CF();
       // console.log(req);

         this.className = "Login Request";
         this.content_type = req.headers['content-type'];
         this.token = req.headers['token'];
         this.request_body = req.body;
    }

    init()
    {
       var iResp = 0;
       console.log("Login Data parses into process")

       // validate this is correct header
     //  iResp = this.validate_header();
       //validate this is correct body
      //  iResp = this.validate_body();
          console.log(iResp);
       // more checking or db Interaction here
       return iResp;

    }

    validate_header()
    {
        var iResp = 0;
     //key ,method , value , err_msg
        iResp = CF.validation(this.content_type,'equal', 'application/json',"Content_Type_Mismatch");
        if(iResp != 0)  {  return -1;   }

        iResp = CF.validation(this.token,'not_equal', null,"PASS");
        if(iResp != 0)  {  return -1;   }

    }

    validate_body()
    {
        var iResp = 0;
        iResp = CF.validation(this.request_body.req_username,'not_equal', null,"PASS");
        if(iResp != 0)  {  return -1; }

        iResp = CF.validation(this.request_body.req_password,'not_equal', null,"PASS");
        if(iResp != 0)  {  return -1; }

    }

    validate_db()
    {

    }





}



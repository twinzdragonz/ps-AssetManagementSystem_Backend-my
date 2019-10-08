
var CommonFunctions = require('../../../middleware/CommonFunctions.js');

const {User} = require("../../Database/Database");

CommonFunctions = new CommonFunctions();
class LoginRequest{

    init(data)
    {
       var iResp = 0;
       console.log("Login Data parses into process")

       // validate this is correct header
         this.content_type = data.headers['content-type'];
         this.token =  data.headers['token'];
         iResp = this.validate_header(this.content_type,this.token);
       //validate this is correct body

        iResp = this.validate_body(data);
        iResp = this.validate_db(data);

      
       // more checking or db Interaction here
       return iResp;

    }

    validate_header(content_type,token)
    {
        var iResp = 0;
     //key ,method , value , err_msg
        iResp = CommonFunctions.validation(content_type,'equal', 'application/json',"Content_Type_Mismatch");
        if(iResp != 0)  {  return -1;   }

        iResp = CommonFunctions.validation(token,'not_equal', null,"PASS");
        if(iResp != 0)  {  return -1;   }

    }

    validate_body(data)
    {
     // CF.log("DATA",data,"raw");
      this.request_body = data.body;
        var iResp = 0;
        iResp = CommonFunctions.validation(this.request_body.req_username,'not_equal', null,"PASS");
        if(iResp != 0)  {  return -1; }

        iResp = CommonFunctions.validation(this.request_body.req_password,'not_equal', null,"PASS");
        if(iResp != 0)  {  return -1; }

        return 0;
    }

    validate_db()
    {
      this.getUser_info().then(function(result)
      {
        return console.log("DATA",result);
       }) 
   
    }

    getUser_info()
    {
      return User.findOne({
        where:{
           username : this.request_body.req_username,
           password : this.request_body.req_password
        }
      });
    }

}
module.exports = LoginRequest;




var CommonFunctions = require('../../../middleware/CommonFunctions.js');

CommonFunctions = new CommonFunctions();


class LogoutRequest{

    init(data)
    {
       var strResp = null;
       var iResp = 0;
       console.log("Login Data parses into process")

       // validate this is correct header
         this.content_type = data.headers['content-type'];
         this.token =  data.headers['token'];
         iResp = this.validate_header(this.content_type,this.token);
                 console.log("LoginRequest -> Validate header",iResp);
       //validate this is correct body
        iResp = this.validate_body(data);
        console.log("LoginRequest -> Validate Body",iResp);
 
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

      this.request_body = data.body;
        var iResp = 0;
        iResp = CommonFunctions.validation(this.request_body.req_username,'not_equal', null,"PASS");
        if(iResp != 0)  {  return -1; }

    
        return 0;
    }

}
module.exports = LogoutRequest;



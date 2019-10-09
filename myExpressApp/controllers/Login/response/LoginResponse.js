const {User} = require("../../Database/Database");

// init value as default       
var data_username = null;
var data_token = null;
var data_password = null;
var data_salt = null;
var data_isAuthenticated = false;
var data_resp_code = "01";
var data_resp_code_description = "Denied";


var  resp_data = "";


 class LoginResponse{

    async init(iResp,request)
    {
       console.log("Login Data building response");

      resp_data = await this.buildJson(iResp,request)

      console.log("LOGIN RESPONSE RESP_DATA :",resp_data);
   
       return resp_data;

    }




   async buildJson(iResp,request)
    {
       console.log("LoginResponse iResp =>",iResp);
     // strResp do what?
       if(iResp == 0)
       {
           
          var db_respond = await this.validate_db(request);
          console.log("LOGIN RESPONSE BUILDJSON: ",db_respond);
            this.request_body = request.body;
           if(data_isAuthenticated == true){
                if(data_username != this.request_body.req_username &&
                   data_password != this.request_body.req_password
                  ){
                     data_resp_code = "03"
                     data_resp_code_description = "Error";

                  }
             
              // do nothing
           }
      
       }
      else
      {
         data_resp_code = "01"
         data_resp_code_description = "Unrecognized Json Data";
      }

      return ({

               resp_username : data_username,
               resp_token : data_token,
               resp_salt : data_salt,
               resp_isAuthenticated : data_isAuthenticated,
               resp_code: data_resp_code,
               resp_code_description : data_resp_code_description
         });

    }

    async validate_db(data)
    {
      
      this.request_body = data.body;

      await User.
        findAll({
          where:{
            username:this.request_body.req_username
          }
        }).then(function(Users){
            console.log("LOGIN RESPONSE VALIDATE_DB :",Users);
           if(Users != undefined || Users.length != 0){

            console.log("LOGIN RESPONSE VALIDATE_DB IS AVAILABLE");

               data_username = Users[0]["username"];
               data_password  = Users[0]["password"];
               data_token  = Users[0]["token"];
               data_salt = Users[0]["salt"];
               data_isAuthenticated = true;
               data_resp_code = "00";
               data_resp_code_description  = "Success";

               return 0;
           }
           else
           { 
               return -1;
           }

       
        }).catch(function(error){
                console.log(error);
 
             });
      }
    
    

    log(title,data)
    {
      // console.log(title,JSON.stringify(data));
    }
}

module.exports = LoginResponse;



 var login_request = require('./request/LoginRequest.js');
 var login_response= require('./response/LoginResponse.js');

 login_request = new login_request();
 login_response = new login_response();

 class LoginController
{

   async proc_login(request,respond)
    {

            var iResp = -1;
            iResp =  login_request.init(request);
            var resp_data =  await login_response.init(iResp,request);
            console.log("RESP_DATA :",resp_data);
            return resp_data;


       // return resp_data;

    }


}
module.exports =LoginController;

var logout_request = require('./request/LogoutRequest.js');
var logout_response= require('./response/LogoutResponse.js');

logout_request = new logout_request();
logout_response = new logout_response();

 class LogoutController
{

   async proc_logout(request,respond)
    {
            var iResp = -1;
            iResp =  logout_request.init(request);
            var resp_data =  await logout_response.init(iResp,request);
            console.log("RESP_DATA :",resp_data);
            return resp_data;


       // return resp_data;

    }


}
module.exports = LogoutController;

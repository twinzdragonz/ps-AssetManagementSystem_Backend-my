
 var login_request = require('./request/LoginRequest.js');
 var login_response= require('./response/LoginResponse.js');


 module.exports = class LoginController
{
    proc_login(request)
    {
        var iResp =0;

         login_request  = new login_request(request);

        iResp =  login_request.init();

        login_response = new login_response(request,iResp);

        var resp_data = login_response.init();

        return resp_data;

    }
}

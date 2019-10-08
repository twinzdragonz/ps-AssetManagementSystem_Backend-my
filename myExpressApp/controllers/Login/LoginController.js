
 var login_request = require('./request/LoginRequest.js');
 var login_response= require('./response/LoginResponse.js');

 login_request = new login_request();
 login_response = new login_response();
class LoginController
{
    proc_login(request)
    {
        var iResp = 0;
        iResp =  login_request.init(request);
        var resp_data = login_response.init(iResp);
        return resp_data;
    }
}
module.exports = LoginController;

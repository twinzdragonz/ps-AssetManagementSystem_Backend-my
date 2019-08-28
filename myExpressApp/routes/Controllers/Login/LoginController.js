'use strict';
var login_request = require('./request/LoginRequest.js')
var login_response= require('./response/LoginResponse.js')



class LoginController
{

    proc_login(request)
    {
        var iResp =0;
        // construct the data into login_request
        login_request = new login_request(request);
        // parse and process on login_request init
        iResp =  login_request.init();
        // construct the data into login_reponse
        login_response = new login_response(request,iResp);
        // parse and process on login_response init
        var resp_data = login_response.init();

        return resp_data;

    }
}

module.exports = LoginController;
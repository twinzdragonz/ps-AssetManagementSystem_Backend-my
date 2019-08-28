'use strict';
const login_request = require('./request/LoginRequest.js')
const login_response= require('./response/LoginResponse.js')

class  LoginController
{
    constructor(request,response){
         this.request = this.request;
         this.response = this.response
    }

    parse(request,response)
    {
        iResp =  this.log("Request Header:",request.headers);
      //  iResp =  login_request.init(data);

    }

    log(title,data)
    {
      console.log(title,JSON.stringify(data));

    }


}
'use strict';
class LoginResponse{

    constructor(req,iresp)
    {
         this.className = "Login Response";
         this.iresp = iresp;

    }

    init()
    {
       var iResp = 0;
       console.log("Login Data building response")

       var resp_data  = buildJson();

       return resp_data;

    }

    buildJson()
    {

    }

  

    log(title,data)
    {
       console.log(title,JSON.stringify(data));
    }

}

module.exports = LoginResponse;
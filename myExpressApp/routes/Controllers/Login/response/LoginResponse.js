'use strict';
class LoginResponse{

    constructor(req,iresp)
    {
         this.className = "Login Response";
         this.iresp = iresp;

    }

    buildHeader()
    {

    }

    buildBody()
    {

    }

    log(title,data)
    {
       console.log(title,JSON.stringify(data));
    }



}

module.exports = LoginResponse;
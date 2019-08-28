'use strict';
class LoginRequest{

    constructor(req)
    {
         this.className = "Login Request";
         this.content_type = req.headers['content-type'];
         this.token = req.headers['token'];
         this.request_body = req.body;
    }

    init()
    {
       var iResp = 0;
       console.log("Login Data parses into process")
       iResp = this.validate_header();

       return iResp;

    }

    validate_header()
    {
        console.log(this.request_body);

        if(this.content_type != 'application/json')
        {
           this.log(this.className,"Content_Type_Mismatch");
           return -1;
        }

        if(this.token == null)
        {
            this.log(this.className,"Token cant be null");
            return -2;
        }
    }

    log(title,data)
    {
       console.log(title,JSON.stringify(data));

    }



}

module.exports = LoginRequest;
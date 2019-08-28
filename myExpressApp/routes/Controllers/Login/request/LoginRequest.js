'use strict';
class LoginRequest{

    constructor(req)
    {
        const className = "Login Request";
        this.req = req;
        this.content_type = req.headers['content-type'];
        this.user_agent = req.headers['user-agent'];
        this.cache_control = req.headers['cache-control'];
        this.content_length = req.headers['content-length'];
        this.connection = req.headers['connection'];
        this.token = req.headers['token'];

    }

    validate_header()
    {
        if(this.content_type != 'application/json')
        {
           this.log(className,"Content_Type_Mismatch");
           return -1;
        }

        if(this.token == null)
        {
            this.log(className,"Token cant be null");
            return -2;
        }
    }


    init(req)
    {
       console.log("Login Data parses into process")
       iResp = this.validate_header();

       return iResp;
       
    }

    log(title,data)
    {
       console.log(title,JSON.stringify(data));

    }



}

console.log(new LoginRequest);
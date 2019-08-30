

module.exports =  class LoginResponse{

    constructor(req,iresp)
    {
         this.className = "Login Response";
         this.req = req;
         this.iresp = iresp;
    }

    init()
    {
       console.log("Login Data building response")

       var resp_data  = this.buildJson();

       return resp_data;

    }

    buildJson()
    {
       if(this.iresp == 0)
       {
         return ({
            resp_code: "00",
            resp_code_description : "Success"
            });
      }
      else
      {
         return ({
            resp_code: "01",
            resp_code_description : "Failed"
            });
      }
    }



    log(title,data)
    {
       console.log(title,JSON.stringify(data));
    }
}

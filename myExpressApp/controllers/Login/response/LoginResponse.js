
 class LoginResponse{

    init(iResp)
    {
       console.log("Login Data building response")

       var resp_data  = this.buildJson(iResp);

       return resp_data;

    }

    buildJson(iresp)
    {
       if(iresp == 0)
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

module.exports = LoginResponse;


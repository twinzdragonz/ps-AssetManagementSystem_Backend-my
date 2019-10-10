const {User} = require("../../Database/Database");

 class LoginResponse{

  async init(iResp,request)
    {
       console.log("LOGIN RESPONSE IRESP >>",iResp);
       var data =  await User.findAll({
                          where:{username:request.body.req_username,
                                 password:request.body.req_password
                                }});
          console.log(data);

            // Extract the JSON we need 
            if(data[0].hasOwnProperty('dataValues')){
               console.log("HI: " + data[0].dataValues);
               returnedJson = data[0].dataValues; // This must be an INSERT...so dig deeper into the JSON object
            } else {
               console.log(data[0]);
               returnedJson =  {
                        resp_code : "01",
                        resp_code_description :"User not exist  or incorrect password"
               }; // This is a find...so the JSON exists here
            }
           return returnedJson;
    }



   // async buildJson(iResp,request)
   //  {
   //     console.log("LoginResponse iResp =>",iResp);

   //   // strResp do what?
   //     if(iResp == 0)
   //     {
   //           var strResp =  await  this.validate_db(request);
   //          console.log("LOGIN RESPONSE , VALIDATE DB >>", strResp);
   //          this.request_body = request.body;
   //         if(data_isAuthenticated == true){

   //              if(data_username != this.request_body.req_username && 
   //                 data_password != this.request_body.req_password)
   //          {
   //             data_resp_code = "03"
   //             data_resp_code_description = "Error";
   //          }
   //            // do_nothing()
   //         }
   //         else
   //         {
   //          data_resp_code = "02"
   //          data_resp_code_description = "User does not exist";
   //         }
   //     }
   //    else
   //    {
   //       data_resp_code = "01"
   //       data_resp_code_description = "Unrecognized Json Data";
   //    }

   //    console.log("resp_username",data_username);
   //    console.log("resp_token",data_token);
   //    console.log("resp_salt",data_salt);
   //    console.log("resp_isAuthenticated",data_isAuthenticated);
   //    console.log("resp_code",data_resp_code);
   //    console.log("resp_code_description",data_resp_code_description);

   //    return ({


   //       resp_username : data_username,
   //       resp_token : data_token,
   //       resp_salt : data_salt,
   //       resp_isAuthenticated : data_isAuthenticated,
   //       resp_code: data_resp_code,
   //       resp_code_description : data_resp_code_description
   //       });

   //  }

   //  async validate_db(data)
   //  {
   //       this.request_body = data.body;

   //       return await User
   //      .findAll({
   //        where:{
   //          username:this.request_body.req_username
   //        }
   //      }).then(function(Users){

   //             data_username = Users[0]["username"];
   //             data_password  = Users[0]["password"];
   //             data_token  = Users[0]["token"];
   //             data_salt = Users[0]["salt"];
   //             data_isAuthenticated = true;
   //             data_resp_code = "00";
   //             data_resp_code_description  = "Success";

   //             return Users;
   //      }).catch(function(ex)
   //      {
   //         console.log(ex);

   //      });
   //  }

   //  log(title,data)
   //  {
   //    // console.log(title,JSON.stringify(data));
   //  }
}

module.exports = LoginResponse;


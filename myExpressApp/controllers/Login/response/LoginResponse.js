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



}

module.exports = LoginResponse;


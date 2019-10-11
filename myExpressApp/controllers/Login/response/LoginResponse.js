const {User} = require("../../Database/Database");


var CommonFunctions = require('../../../middleware/CommonFunctions.js');

CommonFunctions = new CommonFunctions();


 class LoginResponse{

  async init(iResp,request)
    {
       console.log("LOGIN RESPONSE IRESP >>",iResp);
       var data =  await User.findAll({
                          where:{username:request.body.req_username,
                                 password:request.body.req_password
                                }});
          console.log(data);

          var returnedJson = null;
            // Extract the JSON we need
            //result[1] && result[1].username
            if(data[0] && data[0].username){
               console.log("HI: " + data[0].dataValues);

               // add additional info
               data[0].dataValues['resp_code'] =  "00";
               data[0].dataValues['resp_code_description'] =  "Success";

               var key_now = ["id","username","password","salt","token",
                              "updatedAt","createdAt"];

               var key_to_replace = ["resp_id","resp_username","resp_password",
                                   "resp_salt","resp_token","resp_updatedAt","resp_createdAt"];


              CommonFunctions.jsonKeyReplaceArray(data[0].dataValues,key_now,key_to_replace);


               returnedJson = data[0].dataValues;


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


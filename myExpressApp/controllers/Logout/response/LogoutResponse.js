const {User} = require("../../Database/Database");

var CommonFunctions = require('../../../middleware/CommonFunctions.js');

CommonFunctions = new CommonFunctions();


 class LogoutResponse{

  async init(iResp,request)
    {
       console.log("LOGOUT RESPONSE IRESP >>",iResp);
       console.log("THIS FUCKING HEADER", request.headers.token);

       var returnedJson  = null;

 
       var data = await User.findAll({
           where: { username : request.body.req_username,
                    token :    request.headers.token
                }  

            });

            if(data[0] && data[0].username){

                var generate_new_token = CommonFunctions.generateID();
                console.log("TOKEN GENERATED INTO :",generate_new_token);
                // change update token on DB

                var result =  await User.update(
                        {token : generate_new_token },
                        {returning : true , where: { username : request.body.req_username }}
                    );
                    console.log("RESULT TOKEN UPDATED TO :",result)

                      if (!result)
                       {
                            returnedJson =  {
                                resp_code : "02",
                                resp_code_description :"System Error , Please call Admin"
                            }
                        }
                        else
                        {
                            returnedJson =  {
                                resp_code : "00",
                                resp_code_description :"Success"
                            }
                        }
        
                 console.log("DB UPDATED TO CHANGE USER TOKEN");
  
            }else
            {
                console.log(data[0]);
                returnedJson =  {
                         resp_code : "01",
                         resp_code_description :"User not exist  or incorrect password"
                }; // This is a find...so the JSON exists here
            }

            console.log("SEQUALIZE QUERY RESULT",data);

         
            return returnedJson;
    }

}

module.exports = LogoutResponse;


var CommonFunctions = require('../../middleware/CommonFunctions.js');


const {User,UserGroup,UserGroupIndex,UserExt} = require("../Database/Database");

CommonFunctions = new CommonFunctions();
 class UserAccessController
{

   async proc_access(request,respond)
    {
            var iResp = -1;
            console.log("LOGIN RESPONSE IRESP >>",iResp);
            var data =  await User.findAll({
                               where:{username:request.body.req_username,
                                      token:request.headers.token
                                     }});
               console.log(data);
               var returnedJson = null;
                 // Extract the JSON we need
                 //result[1] && result[1].username
                 if(data[0] && data[0].id){
                    console.log("UNIQUE ID :" + data[0].id);
                      var usergroup_index_result = await  UserExt.findAll({
                              where:{ id:data[0].id }
                      });
                      console.log("THIS USER ID :"+data[0].id +"LIST OF GROUP OF:"+usergroup_index_result[0]);

                      returnedJson =  {
                        resp_code : "00",
                        resp_code_description :"Success"
                     }

                 } else {

                    returnedJson =  {
                        resp_code : "01",
                        resp_code_description :"User not exist  or incorrect password"

                 }
               }

            return returnedJson;
    }
 }



module.exports = UserAccessController;

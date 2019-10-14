const {User, UserExt,UserGroup} = require("../../Database/Database");



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
                   // get user external info 
               var user_ext_data =  await UserExt.findAll({
                  where:{id:data[0].id }});

                  if(user_ext_data[0]&& user_ext_data[0].id)
                  {
                     data[0].dataValues['resp_phone_number'] = user_ext_data[0].phone_number;
                     data[0].dataValues['resp_birth_date'] =user_ext_data[0].birth_date;
                     data[0].dataValues['resp_address'] =user_ext_data[0].address;
                     data[0].dataValues['resp_postcode'] =user_ext_data[0].postcode;
                  }

                  console.log("GROUP INDEX OF : ", data[0].group_index);
                      // get user
                  var user_group_data =  await UserGroup.findAll({
                     where:{id:data[0].group_index }});

                  console.log("USER GROUP OF : "+ user_group_data[0].group_name);
                  if(user_group_data[0] && user_group_data[0].id)
                  {
                     data[0].dataValues['resp_group_name'] = user_group_data[0].group_name;
                  }

               // add additional info
               data[0].dataValues['resp_code'] =  "00";
               data[0].dataValues['resp_code_description'] =  "Success";

               var key_now = ["id","username","password","salt","token","group_index",
                              "updatedAt","createdAt"];

               var key_to_replace = ["resp_id","resp_username","resp_password",
                                   "resp_salt","resp_token","resp_group_id","resp_updatedAt","resp_createdAt"];

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


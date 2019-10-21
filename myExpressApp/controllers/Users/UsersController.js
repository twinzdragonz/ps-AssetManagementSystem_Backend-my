var CommonFunctions = require('../../middleware/CommonFunctions.js');
var UserAccess = require('../UserAccess/UserAccessController.js');


const {User} = require("../Database/Database");

UserAccess = new UserAccess();
CommonFunctions = new CommonFunctions();

const doNothonor = {  resp_code : "05", resp_code_description :"Do Not Honor" };
class UsersController
{

      
    async getAuthorized(request,respond)
    {
        var json_resp = await UserAccess.proc_access(request,respond);
        console.log("USERSCONTROLLER ACCESS AUTH: ",json_resp);

        return json_resp;
    }

    async getListofUsers(request,respond)
    {

        console.log("INCOMING REQUEST getListofUsers >>>",request);
        var returnedJson = null;

        var json_resp = await this.getAuthorized(request,respond);
        var resp_code = json_resp.resp_code;

        console.log("AUTH RESP >>>",resp_code);

        if(resp_code === "00")
        {

            var data =  await User.findAll();
            console.log("USER RESPONDS",data);

              return data;
        }
        else
        {
        
                returnedJson =  doNothonor;
        }
    
        return returnedJson;
        
    }



    async getUser(request,respond)
    {
        console.log("INCOMING REQUEST getUser >>>",request);

        var returnedJson = null;

        var json_resp = await this.getAuthorized(request,respond);
        var resp_code = json_resp.resp_code;

        console.log("AUTH RESP >>>",resp_code);

        if(resp_code === "00")
        {
            var Id_requested = request.body.req_user_id;

            var data =  await User.findAll({
                where:{id:Id_requested }});
                var key_now = ["id","username","password","salt","token","group_index",
                "updatedAt","createdAt"];

                var key_to_replace = ["resp_id","resp_username","resp_password",
                                    "resp_salt","resp_token","resp_group_id","resp_updatedAt","resp_createdAt"];
                CommonFunctions.jsonKeyReplaceArray(data[0].dataValues,key_now,key_to_replace);

               returnedJson = data;              
        }
        else
        {
            returnedJson = doNothonor;
        }

        return returnedJson;
    }




}
module.exports = UsersController;

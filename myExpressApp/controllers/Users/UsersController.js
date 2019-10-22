var CommonFunctions = require('../../middleware/CommonFunctions.js');
var UserAccess = require('../UserAccess/UserAccessController.js');


const {User,UserExt} = require("../Database/Database");

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


    async editUser(request,respond)
    {
        console.log("INCOMING REQUEST editUser >>>",request);
        var returnedJson = null;

        var json_resp = await this.getAuthorized(request,respond);
        var resp_code = json_resp.resp_code;

        console.log("AUTH RESP >>>",resp_code);
        if(resp_code === "00")
        {
            await User.update(
                {
                    username        : request.body.req_change_username,
                    password        : request.body.req_change_password,
                    group_index     : request.body.req_change_group
                },
                {returning: true, where: {id: request.body.req_change_user_id} }
              ).then(async (result)=>{
                        console.log("data was Updated");
                        await UserExt.update({

                            phone_number : request.body.req_change_phone_number,
                            birth_date : request.body.req_change_birth_date,
                            address : request.body.req_change_address,
                            postcode : request.body.req_change_postcode,
                            company_id : request.body.req_change_company_id

                        },
                        {returning: true, where: {id: request.body.req_change_user_id} }
                        ).then(async (result)=>{
                            console.log("data was Updated");
                            returnedJson  = {
                                resp_code : "00",
                                resp_code_description :"Successs"
                            }
                        });

                    })

        }
        else
        {
            returnedJson = doNothonor;
        }

       return returnedJson;
    }

    async deleteUser(request,respond)
    {
        console.log("INCOMING REQUEST deleteUser >>>",request);

        var returnedJson = null;

        var json_resp = await this.getAuthorized(request,respond);
        var resp_code = json_resp.resp_code;

        console.log("AUTH RESP >>>",resp_code);
        if(resp_code === "00")
        {
            var Id_requested = request.body.req_user_id;

              var data =  await  User.destroy({
                        where: {
                            id: Id_requested
                        }
                    })
                    .then(function (deletedRecord) {
                        if(deletedRecord === 1){
                            returnedJson  = {
                                resp_code : "00",
                                resp_code_description :"Successs"
                            }
                        }
                        else
                        {
                            returnedJson  = {
                                resp_code : "01",
                                resp_code_description :"Record Not Found"
                            }
                        }
                    })
        }
        else
        {
            returnedJson = doNothonor;
        }

        return returnedJson;

    }

}
module.exports = UsersController;

var CommonFunctions = require('../../../middleware/CommonFunctions.js');
var UserAccess = require('../UserAccess/UserAccessController.js');


const {User} = require("../Database/Database");

UserAccess = new UserAccess();
CommonFunctions = new CommonFunctions();
class UsersController
{

    async getListofUsers(request,respond)
    {

        var returnedJson = null;

        var json_resp = UserAccess.proc_access(request,respond);
        var resp_code = json_resp.body.resp_code;

        if(resp_code === "00")
        {

            var data =  await User.findAll();
              // yup he is authorized and validated token please [PROCEED]
              // respond only when user is validate 
              // we still need to check either this user authorized for admin or not. 
                

        }
        else
        {
            returnedJson =  {
                resp_code : "05",
                resp_code_description :"Do Not Honor"
        }
        


        return returnedJson;
        

    }


      /*    
    async submitContactUs(request,respond)
    {
        var email = request.body.req_email;
        var phone_num = request.body.req_phone_num;
        var message = request.body.req_message;

    
        var returnedJson = null;

         await FormContactUs.create({
                 email : email,
                 phone_number : phone_num,
                 message : message     
        }).then(function(FormContactUs){
            if(FormContactUs){
                returnedJson =  {
                    resp_code : "00",
                    resp_code_description :"Success"
           }; // This is a find...so the JSON exists here
            
            }
            else
            {
                returnedJson =  {
                    resp_code : "01",
                    resp_code_description :"Fail"
           }; // This is a find...so the JSON exists here
            }
        });
           return returnedJson;
    }

    */

}
module.exports = UsersController;

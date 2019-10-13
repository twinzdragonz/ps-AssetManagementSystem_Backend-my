
const {FormContactUs} = require("../Database/Database");

class FormController
{
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

}
module.exports = FormController;

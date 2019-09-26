
var CommonFunctions = require('../../../middleware/CommonFunctions.js');

CommonFunctions = new CommonFunctions();
class SystemRequest{

    init(data)
    {
       var result = [];
       console.log("Login Data parses into process")

       // validate this is correct header
         this.content_type = data.headers['content-type'];
         this.token =  data.headers['token'];
        //validate this is correct body
         this.request_body = data.body;
         var system_entry_mode =  this.request_body.system_request;

         if(system_entry_mode == "company_list")
         {
             result[0] = 0;
             result[1] =  "getCompanyData";
         }



       // more checking or db Interaction here
       return result;

    }



}
module.exports = SystemRequest;



var system_request = require('./request/SystemRequest.js');
var system_response= require('./response/SystemResponse.js');

system_request = new system_request();
system_response = new system_response();

class SystemController
{
    proc_system(request)
    {
         var results = [];
         results =  system_request.init(request);
         console.log(results);
         var resp_data = system_response.init(results[0],results[1]);
         console.log(resp_data);
        return resp_data;
    }
}
module.exports = SystemController;

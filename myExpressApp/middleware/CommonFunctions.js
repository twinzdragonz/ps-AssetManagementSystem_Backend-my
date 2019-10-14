
class CommonFunctions
{
   // just want to test what can i do with NODE.JS on custom library//
    validation(key ,method , value , err_msg)
     {
         var iResp = 0;
         if(method == "equal")
         {
          iResp =  this.validate_equal(key ,method , value , err_msg)
         }
         else
         {
          iResp =  this.validate_not_equal(key ,method , value , err_msg);
         }
         return iResp
     }

     validate_equal(key ,method , value , err_msg)
     {
        var iResp = 0;
        if(key == value)
        {
           iResp = 0;
           err_msg = "PASS";
           this.log("[VALIDATION] :: [DATA] :"+key+ " [METHOD]: " + method,value+" [RESULT]: "+err_msg);
        }
        else
        {
            iResp = -1;
            this.log("[VALIDATION] :: [DATA] :"+key+ " [METHOD]: " + method,value+" [RESULT]: "+err_msg);
        }
        return iResp;
     }

     validate_not_equal(key ,method , value , err_msg)
     {
        var iResp = 0;
         if(key != value)
         {
            iResp = 0;
            err_msg = "PASS";
            this.log("[VALIDATION] :: [DATA] :"+key+ " [METHOD]: " + method,value+" [RESULT]: "+err_msg);
         }
         else
         {
            iResp = -1;
            this.log("[VALIDATION] :: [DATA] :"+key+ " [METHOD]: " + method,value+" [RESULT]: "+err_msg);
         }
         return iResp;
      }


    jsonKeyReplaceArray(json_data,key,newKey)
    {
       if(key.length === newKey.length)
       {
            for(var x = 0; x <key.length; x++ )
            {
               this.jsonKeyReplace(json_data,key[x],newKey[x]);
            }
       }
       else
       {
          console.log("COMMONFUNCTION JSON_KEY_REPLACE_ARRAY ERR MISSMATCH iLength");
       }
       return json_data;
    }

      jsonKeyReplace(json_data,key,newKey)
      {
         // get new key  value 
          var data_value = json_data[key];
          console.log("JSONKEY REPLACE : "+key+ " TO : "+ newKey + " ON VALUE : "+ data_value);
         // remove old key 
         delete json_data[key];
         // add new key with previous value 
         json_data[newKey] = data_value;
         return json_data;

      }

       jsontoArray(data)
       {
          var  temp_array = [];
          for (var key in data) {
              if (data.hasOwnProperty(key))
               {
                  temp_array[data.key].id = data;
             //   console.log(data[key].id);
               }
            }
           return temp_array;
       }

       arraytoJson(array_data)
       {


          return null;
       }
  


     log(title,data,indicator = "json")
     {
        if(indicator == "json")
        {
        console.log(title,JSON.stringify(data));
        }
        else
      {
         console.log(title,data);
      }
     }

     generateID()
     {
      var crypto = require('crypto');

      var current_date = (new Date()).valueOf().toString();
      var random = Math.random().toString();

      return  crypto.createHash('sha1').update(current_date + random).digest('hex');
     }

}
module.exports = CommonFunctions;

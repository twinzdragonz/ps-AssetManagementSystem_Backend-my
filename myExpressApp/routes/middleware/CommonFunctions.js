'use-strict'

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
     




























     log(title,data)
     {
        console.log(title,JSON.stringify(data));
     }


}

module.exports = CommonFunctions;
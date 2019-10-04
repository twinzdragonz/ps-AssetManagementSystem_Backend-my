// insert commonfunctions


 class SystemResponse{

    init(iResp,entry_mode )
    {
       console.log("Login Data building response")

    //   var resp_data  = this.buildJson(iResp);
    // if not 0 just turn error 
        if(iResp != 0)
        {
        return this.err();
        }

        if(entry_mode = "getCompanyData")
        {
           return this.getCompanyData();
        }

       return resp_data;

    }
    
    getCompanyDatafromDB()
    {  

      // which table , all/by id , arguments;
       // arguments = "shortDescription,title,status,shipTo"; // or arguments = "*";
      // var json_data =
        // SequalizeSimplified.delete("tbl_company","*",arguments));
     // return json_data;
    }

    getCompanyData()
    {
        const shortLoremIpsum = `Lorem id sint aliqua tempor tempor sit. Ad dolor dolor ut nulla mollit dolore non eiusmod Lorem tempor nisi cillum.`;
        const longLoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.`;
        // soon we paste this to db?
        return ([
              {
                shortDescription: shortLoremIpsum,
                longDescription: longLoremIpsum,
                title: "AIA",
                status: "Closed",
                shipTo: "Francisco Pérez-Olaeta",
                orderTotal: 2490.0,
                orderDate: new Date(2017, 5, 24).toDateString(),
                id: 1
              },
              {
                shortDescription: shortLoremIpsum,
                longDescription: longLoremIpsum,
                title: "AIG",
                status: "Closed",
                shipTo: "Soo Jung Lee",
                orderTotal: 1760.0,
                orderDate: new Date(2017, 5, 24).toDateString(),
                id: 2
              },
              {
                shortDescription: shortLoremIpsum,
                longDescription: longLoremIpsum,
                title: "Allianz",
                status: "Shipped",
                shipTo: "Run Liu",
                orderTotal: 665.0,
                orderDate: new Date(2017, 6, 3).toDateString(),
                id: 3
              }
            ])
    }

    err()
    {
        return ({
            resp_code: "01",
            resp_code_description : "Failed"
            });
    }



    buildJson(iresp)
    {
       if(iresp == 0)
       {
         return ({
            resp_code: "00",
            resp_code_description : "Success"
            });
      }
      else
      {
         return ({
            resp_code: "01",
            resp_code_description : "Failed"
            });
      }
    }

    log(title,data)
    {
       console.log(title,JSON.stringify(data));
    }
}

module.exports = SystemResponse;


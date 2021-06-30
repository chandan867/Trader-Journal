const axios = require("axios");
const Data=async(stockName)=>{
    const config = {
        head: {
          appName: "5P57337945",
          appVer: "1.0",
          key: "N2dZgSSWmLxWPIygn1GBvP7nmBhe6kw1",
          osName: "Android",
          requestCode: "5PMF",
          userId: "vKu3EXy1q8j",
          password: "mxth0a6vTnw",
        },
        body: {
          Count: 1,
          MarketFeedData: [
            {
              Exch: "N",
              ExchType: "C",
              Symbol: `${stockName}`,
              Expiry: "",
              StrikePrice: "0",
              OptionType: "",
            },
          ],
        },
      };
      try{
        const result=await  axios
        .post("https://Openapi.5paisa.com/VendorsAPI/Service1.svc/MarketFeed", config)
        const {High,Low,PClose}=result.data.body.Data[0]
        //console.log(result.data.body)
        // console.log({High,Low,PClose})
        // res.send({High,Low,PClose})
        if(result)
        return ({High,Low,PClose})
      }
  catch(error){
return (error)
  }
      
   
}
module.exports=Data

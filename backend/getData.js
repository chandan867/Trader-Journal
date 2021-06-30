const axios = require("axios");
const dotenv=require('dotenv')

dotenv.config()


const Data=async(stockName)=>{
 
    const config = 
      {
        "head": {
          "appName": process.env.appName,
          "appVer":process.env.appVer,
          "key": process.env.key,
          "osName":process.env.osName,
          "requestCode": process.env.requestCode,
          "userId": process.env.userId,
          "password": process.env.password,
      },
        "body": {
            "Count": 1,
            "MarketFeedData":[{"Exch":"N",
            "ExchType":"C","Symbol":`${stockName}`,"Expiry":"","StrikePrice":"0","OptionType":""}],
            "ClientLoginType":0,"LastRequestTime":"/Date(0)/","RefreshRate":"H"}       
        };
      
      try{
        const result=await  axios
        .post("https://Openapi.5paisa.com/VendorsAPI/Service1.svc/MarketFeed", config)
     // console.log(result)
      //   console.log(result.data.body)
      //  // console.log({High,Low,PClose})
      //   res.send({High,Low,PClose})
      const {High,Low,LastRate}=result.data.body.Data[0]
        if(result)
        {
         
          return ({High,Low,LastRate})
        }
       
      }
  catch(error){
return (error)
  }
//return (5)
      
   
}
module.exports=Data

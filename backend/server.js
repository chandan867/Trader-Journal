const express=require('express');
const app=express();
const cors=require('cors')
const axios=require('axios');
const Data = require('./getData');



app.use(cors({
      AccessControlAllowOrigin:'http://127.0.0.1:5500'    
}))
const port=4000;
app.get('/',(req,res)=>res.send("running there"))
app.get('/getData/:stockName', async(req,res)=>
{
       const stockName=req.params.stockName.split(':')[1]
      const result=await Data(stockName)
   // const {High,Low,PClose}=result


console.log(result)
res.send(result)


})
//const axios = require("axios");


app.listen(port,()=>console.log(`server running on  port ${port}`))




////////getting the result from api---- function repeated in getData.js



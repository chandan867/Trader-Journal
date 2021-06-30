const stockName=document.getElementById('stockName')
const button=document.getElementById('button')

button.onclick=()=>{
    console.log(stockName.value )
   const data=fetch(`http://localhost:4000/getData/:${stockName.value}`)
   .then((response)=>response.json())
   .then(data=>console.log(data))
//    const jsonData=data.json();
//    console.log(jsonData)
    
}
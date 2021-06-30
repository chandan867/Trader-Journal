const form = document.getElementById("input-form");
const StockName = document.getElementById("StockName");
const buy = document.getElementById("buy");
const sell = document.getElementById("sell");
const entryLevel = document.getElementById("entryLevel");
const Target = document.getElementById("Target");
const sl = document.getElementById("sl");
const Quantity = document.getElementById("Quantity");
const reason = document.getElementById("reason");
const button = document.getElementById("button");
const displayTable = document.getElementById("displayTable");

let day = new Date().toLocaleDateString();

const entries = JSON.parse(localStorage.getItem("allData"));
//console.log(entries)
//entries.map(entry=>console.log(entry.StockName))
entries.map((entry) => {


    const data = fetch(`http://localhost:4000/getData/:${entry.StockName}`)
    .then((response) => response.json())
    .then((data) => {
        const tr = document.createElement("tr");
            entry.Profit=data.High-entry.entryLevel
            entry.NetProfit=entry.Profit*entry.Quantity
            entry.Profit_percent=(entry.Profit/entry.entryLevel)*100;
        tr.innerHTML = `
          
          <td>${entry.day}</td>
          <td>${entry.StockName}</td>
          <td>${entry.entryLevel}</td>
          <td>${entry.Target}</td>
          <td>${entry.sl}</td>
          <td>${entry.Quantity}</td>
          <td>${entry.High}</td>
          <td>${entry.Low}</td>
          <td>${entry.Cmp}</td>
          <td>${entry.Remarks}</td>
          <td>${entry.ExitPrice}</td>
          <td>${entry.Profit}</td>
          <td>${entry.NetProfit}</td>
          <td>${entry.Profit_percent}</td>
          <td>${entry.TradeReason}</td>
          <td>${entry.Learning}</td>
          
          `;
        displayTable.appendChild(tr);
    });
})
//   const tr = document.createElement("tr");

//   tr.innerHTML = `
    
//     <td>${entry.day}</td>
//     <td>${entry.StockName}</td>
//     <td>${entry.entryLevel}</td>
//     <td>${entry.Target}</td>
//     <td>${entry.sl}</td>
//     <td>${entry.Quantity}</td>
//     <td>${entry.High}</td>
//     <td>${entry.Low}</td>
//     <td>${entry.Cmp}</td>
//     <td>${entry.Remarks}</td>
//     <td>${entry.ExitPrice}</td>
//     <td>${entry.Profit}</td>
//     <td>${entry.NetProfit}</td>
//     <td>${entry.Profit_percent}</td>
//     <td>${entry.TradeReason}</td>
//     <td>${entry.Learning}</td>
    
//     `;
//   displayTable.appendChild(tr);
// });

form.onsubmit = (e) => {
  e.preventDefault();
  console.log(StockName.value);

  const data = fetch(`http://localhost:4000/getData/:${StockName.value}`)
    .then((response) => response.json())
    .then((data) => {
      addHTML(data.High, data.Low, data.LastRate);
    });
};

addHTML = (High, Low, Cmp) => {
  const tr = document.createElement("tr");

  tr.innerHTML = `

<td>${day}</td>
<td>${StockName.value}</td>
<td>${entryLevel.value}</td>
<td>${Target.value}</td>
<td>${sl.value}</td>
<td>${Quantity.value}</td>
<td>${High}</td>
<td>${Low}</td>
<td>${Cmp}</td>
<td>${(Remarks = 0)}</td>
<td>${(ExitPrice = 0)}</td>
<td>${(Profit = 0)}</td>
<td>${(NetProfit = 0)}</td>
<td>${(Profit_percent = 0)}</td>
<td>${(TradeReason = 0)}</td>
<td>${(Learning = 0)}</td>

`;

  addToLocalStorage(High, Low, Cmp);
  displayTable.appendChild(tr);
};
const addToLocalStorage = (High, Low, Cmp) => {
  let existingData = JSON.parse(localStorage.getItem("allData"));
  if (existingData == null) existingData = [];

  let data = {
    day: day,
    StockName: StockName.value,
    entryLevel: entryLevel.value,
    Target: Target.value,
    sl: sl.value,
    Quantity: Quantity.value,
    High: High,
    Low: Low,
    Cmp: Cmp,
    Remarks: Remarks,
    ExitPrice: ExitPrice,
    Profit: Profit,
    NetProfit: NetProfit,
    Profit_percent: NetProfit,
    TradeReason: TradeReason,
    Learning: Learning,
  };
  localStorage.setItem("data", JSON.stringify(data));
  // Save allEntries back to local storage
  existingData.push(data);
  localStorage.setItem("allData", JSON.stringify(existingData));
};

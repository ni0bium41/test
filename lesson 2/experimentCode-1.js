 
let money, time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {} ,
    optionalExpenses: {},
    income: [],
    savings: true
 };
 function chooseOptExpenses() {
   for (i=0; i<3; i++) {
      let c = prompt("Статья необязательных расходов?", " ");
      appData.optionalExpenses[i] = c.split(" ,");
      console.log (appData.optionalExpenses);
   }
}
chooseOptExpenses();
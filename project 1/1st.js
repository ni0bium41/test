
let money = prompt("Ваш бюджет на месяц?", " ");
let time = prompt ("Введите дату в формате YYYY-MM-DD", " ");


let appData = {
   budget : money,
   timeData: time,
   expenses: {} ,
   optionalExpenses: {},
   income: [],
   savings: false
};

for (let i = 0; i < 2; i++) {
   let a = prompt ("Введите обязательную статью расходов в этом месяце", " ");
   let b = prompt ("Во сколько обойдется?", " ");

   if (typeof(a) === "string" && typeof(b) === "string" && 
   typeof(a) != null && typeof(b) != null && a.length <50 && b.length < 50 && a != "" && b != "") {
    console.log ("done");
      appData.expenses [a] = b;
   } else {
      console.log ("specify your answer")
   }
   }

appData.moneyPerDay = appData.budget/30;
   
alert(appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
   console.log ("Low lever");
}
else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log ("Average lever");
} else if (appData.moneyPerDay > 2000) {
   console.log ("High lever");
} 
else {
   console.log ("specify the value")
}
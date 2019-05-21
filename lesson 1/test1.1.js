let money, time;
function start () {
    money = +prompt("Ваш бюджет на месяц?", " ");
    time = prompt ("Введите дату в формате YYYY-MM-DD", " ");

    while (isNaN(money) || money == null || money == " ") {
      money = +prompt("Ваш бюджет на месяц?", " ");
    }
    start ();
}



let appData = {
   budget : money,
   timeData: time,
   expenses: {} ,
   optionalExpenses: {},
   income: [],
   savings: true
};

function chooseExpenses () {
   for (let i = 0; i < 2; i++) {
      let a = prompt ("Введите обязательную статью расходов в этом месяце", " ");
      let b = prompt ("Во сколько обойдется?", " ");
   
      if (typeof(a) === "string" && typeof(b) === "string" && 
      typeof(a) != null && typeof(b) != null && a.length <50 && b.length < 50 && a != "" && b != "") {
       console.log ("done");
         appData.expenses [a] = b;
      } else {
         i = i - 1;
      }
      }
}
chooseExpenses ();

appData.moneyPerDay = (appData.budget/30).toFixed();
   
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

function checkSavings () {
   if (appData.savings == true) {
      let save = +prompt ("How much is your savings?");
      let percent = +prompt ("Write the percent");

      appData.monthIncome = save/100/12*percent;
      alert ("Your monthly income from deposit: " + appData.monthIncome);
   }

}
checkSavings ();
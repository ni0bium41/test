let money, time;
function start () {
    money = +prompt("Ваш бюджет на месяц?", " ");
    time = prompt ("Введите дату в формате YYYY-MM-DD", " ");

    while (isNaN(money) || money == null || money == " ") {
      money = +prompt("Ваш бюджет на месяц?", " ");
    }
    
}
start ();


let appData = {
   budget : money,
   timeData: time,
   expenses: {} ,
   optionalExpenses: {},
   income: [],
   savings: true,
   chooseExpenses: function () {
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
   },
   detectDayBudget: function () {
      appData.moneyPerDay = (appData.budget/30).toFixed();
         alert('Ежедневный бюджет' + appData.moneyPerDay);
      },
      detectLevel: function () {
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
      },
      checkSavings: function () {
         if (appData.savings == true) {
            let save = +prompt ("How much is your savings?");
            let percent = +prompt ("Write the percent");
      
            appData.monthIncome = save/100/12*percent;
            alert ("Your monthly income from deposit: " + appData.monthIncome);
         }
      } ,
      chooseOptExpenses: function () {
         for (i=0; i<3; i++) {
            let opt = prompt("Статья необязательных расходов?", " ");
            appData.optionalExpenses[i] = opt;
            console.log (appData.optionalExpenses);
         }
      },
      chooseIncome: function () {
         let item = prompt ('Что принесет доп доход? (Перечислить через запятую)', ' ');

         while (typeof(item) == null || typeof(item) == " " || typeof(item) != "string") {
            item = prompt ('Что принесет доп доход? (Перечислить через запятую)', ' ');
         }
         appData.income = item.split(' ,');
         appData.income.push(prompt ("Smth else?"));
         appData.income.sort();

         income.forEach(function (smth) {
            alert ("Способы доп. заработка: " + smth );
         });
      }
   
};

for (let totalAppData in appData) {
   console.log (`Наша программа включает в себя данные: ${totalAppData}`);
}

//Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)





//Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)



/*Создать функцию для определения необязательных расходов (chooseOptExpenses):
Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
Записать ответы в объект optionalExpenses в формате Номер - Ответ.
    optionalExpenses: {
    1 : “ответ на вопрос”
    }
Вызывать функции не обязательно.*/

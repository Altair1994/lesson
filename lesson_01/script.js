'use strict'
let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("дата формирования");
    console.log(money);
    console.log(time);
let appData = {
    budget: money,
    timeData: time,
    income:[],
    savings:false,
    expenses:{},
    optionalExpenses:{},
    };
let question1 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer1 = prompt("Во сколько обойдется?"),
    question2 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer2 = prompt("Во сколько обойдется?");
    
    let day = 30;
    alert(money/day);
  
    appData.expenses[question1] = answer1;
    appData.expenses[question2] = answer2;
    console.log(appData.expenses[question1]);
    console.log(appData.expenses[question2]);
   
'use strict'
let money=+prompt("Ваш бюджет на месяц?");
    time=prompt("дата формирования");
    console.log(money);
    console.log(time);
let appData={
    Budget:"money",
    timeData:"time",
    income:[],
    savings:false,
    optionalExpenses:{},
    };
    let article1=prompt("Введите обязательную статью расходов в этом месяце");
let price1=prompt("Во сколько обойдется?");
let article2=prompt("Введите обязательную статью расходов в этом месяце");
let price2=prompt("Во сколько обойдется?");
let  expenses={ question1:"article1",
    question2:"price1",
};
let day=30;
alert(money/day);
console.log(expenses.question1.article1);
console.log(expenses.question2.price1);
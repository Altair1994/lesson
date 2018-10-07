
let money=prompt("Ваш бюджет на месяц?");
    time=prompt("date:дата формирования");
    money1=+money;
    console.log(money);
    console.log(time);
let appData={
    butzhet:"money",
    timeData:"time",
    };
let optionalExpenses={
    };
let  expenses={ 
};

 let income=[

 ];
 savings=false;
let article1=prompt("Введите обязательную статью расходов в этом месяце");
let price1=prompt("Во сколько обойдется?");
let article2=prompt("Введите обязательную статью расходов в этом месяце");
let price2=prompt("Во сколько обойдется?");
expenses["vopros1"]=article1;
expenses["vopros2"]=price1;
console.log(expenses.vopros1);
console.log(expenses.vopros2);
let day=30;
alert(money/day);
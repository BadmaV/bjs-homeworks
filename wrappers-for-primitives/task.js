function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    //return totalAmount;

    function isNumber(item) { 
      if (Number.isFinite(Number(item))) {
          return item
      } else {
        console.log(`Параметр содержит неправильное значение ${item}`);
      }
    }
 
    isNumber(percent);
    isNumber(contribution);
    isNumber(amount);
    isNumber(date); 

    let today = +new Date();
    let payDate = +new Date(date);
    let months = ( payDate - today ) / ( 1000 * 60 * 60 * 24 * 30 );

    let monthPrcnt = percent / 1200;
    let payMonth =  (amount - contribution) * (monthPrcnt + monthPrcnt / (((1 + monthPrcnt)**12) - 1));
    let totalAmount = (payMonth * months).toFixed(2);
        return totalAmount;   
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}
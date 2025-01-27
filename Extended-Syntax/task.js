

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;
    'use strict';

    let discrim = b ** 2 - 4 * a * c;
    let arr = [];

    if (discrim === 0) {
        arr.push(-b / 2 * a);
    } else {
        arr.push((-b + Math.sqrt(discrim)) / (2 * a));
        arr.push((-b - Math.sqrt(discrim)) / (2 * a));
    }

    return arr;

    getResult(2, 4, -3);

}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    //return averageMark;
    'use strict';

    let sum = 0;
    if (marks.length > 5) {
       marks.splice(5)
       console.log('слишком много оценок!');
    }
    for (let i = 0; i < marks.length; i++) {
       sum += marks[i];
    } 
    let averageMark = `Средний балл: ${sum / marks.length}`;
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
    'use strict';
    
    let today = new Date().getFullYear();
    let BirthdayYear = dateOfBirthday.getFullYear();
    let age = today - BirthdayYear;
    let result;
    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    console.log(result);
    return result;
}
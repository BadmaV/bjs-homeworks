// Задание 1

function getSolutions( a, b, c ) {
    let D = b**2 - 4 * a * c;
    
    if (D < 0) {
        return {
            "D": D
        };
    } else if (D == 0) {
      let x1 = (-b) / ( 2 * a );
      return {
        roots: [x1],
        "D": D
      };
    } else {
      let x1 = (-b + Math.sqrt( D )) / (2 * a);
      let x2 = (-b - Math.sqrt( D )) / (2 * a);
      return {
        roots: [x1, x2],
        "D": D
      };
    };
}

function showSolutionsMessage( a, b, c ) {
  let result = getSolutions( a, b, c );
  
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  
  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D == 0) {
    console.log(`Уравнение имеет один корень X₁ =${result.roots[0]}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(2, 4, 2);


// Задание 2

function getAverageScore(data) {   //объявляем функцию высчитывающую средний балл с параметром data
    let averageMark = {};          //создаем объект с средними оценками
    for (let prop in data) {       //создаем цикл for
      let value = 0;               //объявляем переменную value 
      for (let i=0; i < data[prop].length; i++) { //вложенный цикл for считающий до длины массива data
        value += data[prop][i];    //value увеличиваем на текущий индекс массива data  
      }
      averageMark[prop] = value / data[prop].length; //
    } 
    return averageMark;            //возвращаем из функции объект с средней оценкой.
  } 
  
  
  function getAverageMarks(data) { //объявляем функцию с средними оценками с параметром data
    let averageMarks = getAverageScore(data); //создаем переменную и присваиваем ей значение предыдущей функции
    let sum = 0;                   //создаем переменную sum с значением 0
    let items = 0;                 //создаем переменную items = 0
    for (let prop in averageMarks) { //цикл for in
      sum += averageMarks[prop];   //переменную sum увеличиваем элемент массива 
      items++;                     //увеличиваем значение переменной items на 1
    }
  
    let average = sum / items;     //объявляем переменную average и присваиваем результат деления sum items
    averageMarks.average = average;//ключу объекта averageMarks присваиваем значение переменной average
    return averageMarks;           //возвращаем из функции объект averageMarks 
  }
  
  getAverageMarks({                //вызов функции getAverageMarks с аргументом
    algebra: [5, 4, 5, 3, 5],      //ключ - algebra, значение - массив оценок
    biology: [5, 4, 5, 3, 5, 3, 4, 4, 4, 4],
    russian: [5, 4, 5, ],          
    english: [5, 4, 5, 3, 5, 4],
    poetry: [5, 4, 5, 3, 5, 5],
    music: [3, 5, 4, 5 ]
    }
  ); 

  // Задание 3
  function getPersonData( secretData ) {
    return {
      firstName: getName(secretData.aaa),  
      lastName: getName(secretData.bbb)
    };
  }

  function getName(number) {
    if (number == 0) {
      return "Родриго";
      }; 
    if (number == 1) {
      return "Эмильо";
    };
  } 
  
  getPersonData({
    aaa: 1,
    bbb: 0,
  });
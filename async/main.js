// 16.12.2019

let setDailyRhythm = (wakeUpTime, bedTime) => {
  const goodMorning = () => alert('Доброе утро!');
  const goToBed = () => alert('Пора спать!!!');

  checkTimeMorning = setAlarm(wakeUpTime, goodMorning);
  checkTimeEvening = setAlarm(bedTime, goToBed);

  setInterval(checkTimeMorning, 1000);
  setInterval(checkTimeEvening, 1000);
}

let setAlarm = (time, callback) => {
  return function checkTime () {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
    if (hours < 10) {
        hours = '0' + hours;
    } else if (min < 10) {
        min = '0' + min;
    }
  let currentTime = hours + ':' + min;

  if (time == currentTime) {
    return callback();
  }
  }
}

setDailyRhythm('08:00', '23:15');
















/*let date = new Date();
text = date.getFullYear(); 
text += '\nМесяц: ' + date.getMonth();
text += '\nДень: ' + date.getDay();
text += '\nЧас: ' + date.getHours();
text += '\nМинут: ' + date.getMinutes();
//alert(text);

let date1 = new Date(1983, 0, 01, 01, 50, 20);
date1.setMinutes(30);
date1.setSeconds(30);
text = date1.getFullYear();
text += '\nМесяц: ' + date1.getMonth();
text += '\nДень: ' + date1.getDay();
text += '\nЧас: ' + date1.getHours();
text += '\nМинут: ' + date1.getMinutes();
text += '\nСекунд: ' + date1.getSeconds();
alert(text);
*/


























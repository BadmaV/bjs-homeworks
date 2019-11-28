let wakeUpTime = "8:00";
let goToBedTime = "22:00";

let setDailyRhythm = (wakeUpTime, bedTime) => {
setInterval(checkTimeEvening, 1000);
setInterval(checkTimeMorning, 1000);
}

let setAlarm = (time, callback) => {
  return function checkTimeNRing () {
  let currentDate = new Date();
  let hrs = currentDate.getHours();
  let min = currentDate.getMinutes();
  let currentTime= hrs + ":" + min;
  
  if (time == currentTime) {
    return callback();
  }
  }
}

const goodMorning = () => alert('Доброе утро!');
const goToBed = () => alert('Пора спать!')

checkTimeMorning = setAlarm('8:00', goodMorning);
checkTimeEvening = setAlarm('22:42', goToBed);


setDailyRhythm(wakeUpTime, goToBedTime);
let wakeUpTime = "08:00";
let goToBedTime = "22:00";

let setDailyRhythm = (wakeUpTime, bedTime) => {
setInterval(checkTimeEvening, 1000);
setInterval(checkTimeMorning, 1000);

const goodMorning = () => alert('Доброе утро!');
const goToBed = () => alert('Пора спать!')

checkTimeMorning = setAlarm('08:00', goodMorning);
checkTimeEvening = setAlarm('22:42', goToBed);
}

let setAlarm = (time, callback) => {
  return function checkTimeNRing () {
  let currentDate = new Date();
  let hrs = currentDate.getHours();
  let min = currentDate.getMinutes();
  let currentTime = hrs + ":" + min;
  
  if (time == currentTime) {
    return callback();
  }
  }
}

setDailyRhythm(wakeUpTime, goToBedTime);
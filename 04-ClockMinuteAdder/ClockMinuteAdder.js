function clockMinuteAdder(time, minutesToAdd) {
  // Tu código aquí

const timeToMin = Number(time.split(':')[0]* 60) +  Number(time.split(':')[1]);
const totalTimeInMin = timeToMin + minutesToAdd

let newTime = Math.floor(totalTimeInMin/60) ;

let hora = (newTime % 12 === 0)? 12 :newTime % 12;
let min =  Math.trunc((totalTimeInMin/60 - Math.floor(totalTimeInMin/60)) * 60)

return ((hora < 10)? '0' + hora : hora)+':'+((min < 10)? '0' + min : min)

}

console.log(clockMinuteAdder('12:05', 100))



module.exports = clockMinuteAdder;

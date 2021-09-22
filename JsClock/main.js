const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const SecondsDegrees = (seconds / 60) * 360 + 90 //formula
  secondHand.style.transform = `rotate(${SecondsDegrees}deg)`;
  // console.log(seconds);
  //for minutes
  const minutes = now.getMinutes();
  const MinuteDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${MinuteDegrees}deg)`;

  //for hours


  const hourDegree = (minutes / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

}
//set interval calls a func again and again after a set duration
setInterval(setDate, 1000);
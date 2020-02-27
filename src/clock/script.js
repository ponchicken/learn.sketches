const hourArrowEl = document.getElementById("hour");
const minuteArrowEl = document.getElementById("minute");
const secondArrowEl = document.getElementById("second");

function setHours() {
  let hour = new Date().getHours();
  hourArrowEl.style.transform = `rotate(${hour * 30}deg)`;
}

function setMinutes() {
  let minute = new Date().getMinutes();
  minuteArrowEl.style.transform = `rotate(${minute * 6}deg)`;
}

function setSeconds() {
  let second = new Date().getSeconds();
  secondArrowEl.style.transform = `rotate(${second * 6}deg)`;
}

setHours();
setMinutes();
setSeconds();

setInterval(() => {
  setHours();
  setMinutes();
  setSeconds();
}, 1000);

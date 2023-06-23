
let hourHand = document.querySelector('.hour');
let minuteHand = document.querySelector('.minute');
let secondHand = document.querySelector('.second');
let dayornight = document.querySelector('.amorpm');

let Ticking = () => {

    let currentDate = new Date();
    let getHour = currentDate.getHours();
    let getMinutes = currentDate.getMinutes()
    let getSec = currentDate.getSeconds();
    let AMORPM = "AM";
    hourHand.textContent = getHour > 12 ? getHour - 12 : getHour
    minuteHand.textContent = getMinutes;
    secondHand.textContent = getSec;
    dayornight.textContent = getHour >= 12 ? "PM" : "AM"
   
}
setInterval(Ticking, 1000)



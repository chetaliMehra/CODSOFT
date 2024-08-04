let second=0,minute=0,hour=0;
let d=new Date();

setInterval(function(){
    d=new Date();
    second=d.getSeconds()*6;
    minute=d.getMinutes()*6;
    hour=d.getHours()*30 +Math.round(minute/12);
    document.getElementById("second-hand").style.transform="rotate("+second+"deg)";
    document.getElementById("minute-hand").style.transform="rotate("+minute+"deg)";
    document.getElementById("hour-hand").style.transform="rotate("+hour+"deg)";
},1000);

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateClock, 1000);

updateClock();
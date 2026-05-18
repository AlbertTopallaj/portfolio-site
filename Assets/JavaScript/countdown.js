const countdown = document.getElementById('countdown');

let timeLeft = 10;

const timer = setInterval(() => {
    countdown.textContent = timeLeft;
    countdown.style.fontSize = "60px"
    timeLeft--;

    if(timeLeft < 0) {
        clearInterval(timer);
        countdown.textContent = "Tiden är ute!";
    }

}, 1000);


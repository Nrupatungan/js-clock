const min_hand = document.querySelector("#min-hand");
const sec_hand = document.querySelector("#second-hand");
const hour_hand = document.querySelector("#hour-hand");
const hr = document.querySelector(".hr");
const mint = document.querySelector(".mint");
const sec = document.querySelector(".sec");

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    sec_hand.style.transform = `rotate(${secondsDegrees}deg)`;
    sec.innerText = seconds;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    min_hand.style.transform = `rotate(${minsDegrees}deg)`;
    mint.innerText = mins;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hour_hand.style.transform = `rotate(${hourDegrees}deg)`;
    hr.innerText = hour;
}

setInterval(setDate, 1000);

setDate();
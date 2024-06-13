const COUNT_DOWN_TO_DATE = new Date(2024, 7, 1);
const countDown = document.getElementById("countdown");

setInterval(() => {
    const now = Date.now();
    const diff = COUNT_DOWN_TO_DATE - now;

    const secDiff = Math.floor((diff / 1000) % 60); // in Sekunden
    const minDiff = Math.floor((diff / 1000 / 60) % 60); // in Minuten
    const hDiff = Math.floor((diff / 1000 / 60 / 60) % 24); // in Stunden  
    const dDiff = Math.floor(diff / 1000 / 60 / 60 / 24); // in Tagen  

    countDown.innerText = dDiff + " Tage " + hDiff + " Stunden " + minDiff + " Minuten " + secDiff + " Sekunden";
}, 1000);
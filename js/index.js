/* JS Code, der nur auf der Start Page verwendet wird */

const COUNT_DOWN_TO_DATE = new Date(2025, 8, 31);
const countDown = document.getElementById("countdown");

setInterval(() => {
    const now = Date.now();
    const diff = COUNT_DOWN_TO_DATE - now;

    const secDiff = Math.floor((diff / 1000) % 60); // in seconds
    const minDiff = Math.floor((diff / 1000 / 60) % 60); // in minutes
    const hDiff = Math.floor((diff / 1000 / 60 / 60) % 24); // in hours  
    const dDiff = Math.floor(diff / 1000 / 60 / 60 / 24); // in days  

    countDown.innerText = dDiff + "d " + hDiff + "h " + minDiff + "m " + secDiff + "s";
}, 1000);
//Elemente aus HTML definieren
const game = document.getElementById("game");
const gameInfo = document.getElementById("game-info")
const score = document.getElementById("game-score");
const gameBackground = document.getElementById("game-background");
const endScreen = document.getElementById("game-end");
const harry = document.getElementById("game-character")
const winnerText = document.getElementById("game-winner");
const loserText = document.getElementById("game-loser");
const startScreen = document.getElementById("game-start");
const form = document.getElementById("form");

const POINTS_TO_WIN = 100;
let running = false;
let movingUp = false;
let movingDown = true;
let intervalCounter = 10;

document.addEventListener('DOMContentLoaded', () => {
   //Event Listener hinzufügen wenn DOM content geladen ist

   startScreen.addEventListener("click", () => {
      if (!running) {
         startGame();
      }
   });

   document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowUp") {
         event.preventDefault(); //Bewegt die Seite nicht
         //die Bewegung erfolgt in der Spielschleife, damit sie nicht mit dem Gravitationseffekt kollidiert
         movingUp = true;
      }
   });

   document.addEventListener("keyup", (event) => {
      if (event.key === "ArrowUp") {
         event.preventDefault();
         movingUp = false;
      }
   });


   setInterval(() => {
      //Game loop
      if (!running) {
         return
      }

      //checkd Kollisionen
      const allObstacles = Array.from(document.querySelectorAll(".game-obstacle"));
      const hasCollision = allObstacles.some((obstacle) => hasOverlap(harry, obstacle));
      if (hasCollision) {
         stopGame();
      }

      intervalCounter += 1;
      if (intervalCounter % 10 === 0) {
         //erhöht den Score
         score.innerText = Number(score.innerText) + 1;
      }

      if (intervalCounter % 100 === 0) {
         //kreiert Hindernisse
         createObstacle();
      }

      if (movingUp) {
         moveUp();
      } else {
         moveDown();
      }
   }, 15);

})

function startGame() {
   running = true;
   startScreen.classList.add("hidden");
   endScreen.classList.add("hidden");
   gameBackground.classList.add("bg-animation");
   harry.classList.remove("dead");
   score.innerText = 0;
   intervalCounter = 0;
}

function stopGame() {
   running = false;
   gameBackground.classList.remove("bg-animation");
   startScreen.classList.remove("hidden");
   endScreen.classList.remove("hidden");
   harry.classList.add("dead");

   if (Number(score.innerText) >= POINTS_TO_WIN) {
      winnerText.classList.remove("hidden");
      loserText.classList.add("hidden");
      gameInfo.classList.add("hidden");
      game.classList.add("hidden");
      form.classList.remove("hidden");
   } else {
      loserText.classList.remove("hidden");
   }
}

function createObstacle() {
   const obstacle = document.createElement("div");
   obstacle.classList.add("game-obstacle");

   if (Math.random() > 0.4) {
      obstacle.style.top = "250px";
   } else if (Math.random() > 0.5) {
      obstacle.style.top = "30px";
   } else {
      obstacle.style.top = "130px";
   }

   //hinzufügen einer zufälligen Bewegungsdauer zwischen 0,5 und 1,5 Sekunden
   const duration = Math.random() + 0.5;
   obstacle.style.animationDuration = `${duration}s`;

   game.appendChild(obstacle);
   obstacle.addEventListener("animationend", () => {
      //entfernt das Hindernis wenn die Animation endet
      obstacle.remove();
   });
}

function moveUp() {
   let top = parseInt(getComputedStyle(harry).top.replace('px', ''));

   top -= 20;

   if (top < 0) {
      top = 0;
   }

   harry.style.top = top + 'px';
}

function moveDown() {
   let top = parseInt(getComputedStyle(harry).top.replace('px', ''));
   top += 20;

   if (top > 225) {
      top = 225;
   }

   harry.style.top = top + 'px';
}

function hasOverlap(element1, element2) {
   const rect1 = element1.getBoundingClientRect();
   const rect2 = element2.getBoundingClientRect();

   return !(rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom)
}
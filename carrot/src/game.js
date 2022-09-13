"use strict";

import popUp from "./popup.js";

const gameBtn = document.querySelector(".gameBtn");
const gameField = document.querySelector(".game__field");
const gameFieldRect = gameField.getBoundingClientRect();
const scoreTitle = document.querySelector(".score");
const timerTitle = document.querySelector(".timer");

const IMAGE_SIZE = 80;
const CARROT_COUNT = 10;
const BUG_COUNT = 10;
const GAME_TIMER = 10;

let started = false;
let timer = undefined;
let score = 0;

const gamePopUp = new popUp();

function stopTimer() {
  clearInterval(timer);
}

function updateScoreTitle() {
  scoreTitle.innerText = `${CARROT_COUNT - score}`;
}

function updateTimerTitle(time) {
  timerTitle.innerText = `${time >= 10 ? `0:${time}` : `0:0${time}`}`;
}

// function gamePopUp.updateTitle(txt) {
//   popUpTitle.innerText = `${txt}`;
// }

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function changeBtn() {
  const icon = document.querySelector(".fa-solid");
  icon.classList.toggle("fa-play");
  icon.classList.toggle("fa-pause");
  return;
}

function showTimerAndScore() {
  const HIDE_CLASS = "game__header__hide";
  scoreTitle.classList.remove(HIDE_CLASS);
  timerTitle.classList.remove(HIDE_CLASS);
  return;
}

function showGameBtn() {
  gameBtn.style.visibility = "visible";
}

function removePauseBtn() {
  gameBtn.style.visibility = "hidden";
}

// function gamePopUp.hide();{
//   popUp.style.visibility = "hidden";
//   showGameBtn();
//   changeBtn();
// }

function addImage(className, count, imagePath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = gameFieldRect.width - IMAGE_SIZE;
  const y2 = gameFieldRect.height - IMAGE_SIZE;
  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.setAttribute("class", className);
    img.setAttribute("src", imagePath);
    img.style.position = "absolute";
    const x = getRandomValue(x1, x2);
    const y = getRandomValue(y1, y2);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    gameField.appendChild(img);
  }
  return;
}

function initGame() {
  gameField.innerHTML = "";
  score = 0;
  updateScoreTitle();
  addImage("carrot", CARROT_COUNT, "img/carrot.png");
  addImage("bug", BUG_COUNT, "img/bug.png");
  return;
}

function finishGame(win) {
  if (win) {
    // 음악추가
    gamePopUp.updateTitle("You Win 👍");
  } else {
    gamePopUp.updateTitle("Time Over ❌");
  }
  stopTimer();
  gamePopUp.show();
  return;
}

function startTimer() {
  let currentTime = GAME_TIMER;
  updateTimerTitle(currentTime);
  timer = setInterval(() => {
    if (currentTime <= 0) {
      started = false;
      finishGame(score === CARROT_COUNT);
      stopTimer();
      return;
    }
    updateTimerTitle(--currentTime);
  }, 1000);
}

function startGame() {
  started = true;
  initGame();
  showTimerAndScore();
  changeBtn();
  startTimer();
}

function stopGame() {
  started = false;
  removePauseBtn();
  gamePopUp.show();
  gamePopUp.updateTitle("RePlay ❓");
  stopTimer();
}

function handleGameBtnClick() {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
}

function handleReplayBtnClick() {
  startGame();
  gamePopUp.hide();
}

function handleGameFieldClick(e) {
  if (!started) {
    return;
  }
  const {
    target: { className },
  } = e;
  if (className.match("carrot")) {
    score++;
    console.log(score);
    if (score === CARROT_COUNT) {
      finishGame(true);
      return;
    }
    e.target.remove();
    updateScoreTitle();
  }
  if (className.match("bug")) {
    finishGame(false);
    gamePopUp.updateTitle("Bug Click ❌");
    return;
  }
  return;
}

function init() {
  gameBtn.addEventListener("click", handleGameBtnClick);
  gamePopUp.setAddEvent(handleReplayBtnClick);
  gameField.addEventListener("click", handleGameFieldClick);
}

init();

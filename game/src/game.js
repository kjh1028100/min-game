"use strict";

import Field from "./field.js";
import * as sound from "./sound.js";

export const Reason = Object.freeze({
  win: "win",
  lose: "lose",
  cancel: "cancel",
});

export class GameBuilder {
  gameDuration(gameDuration) {
    this.gameDuration = gameDuration;
    return this;
  }
  carrotCount(carrotCount) {
    this.carrotCount = carrotCount;
    return this;
  }
  bugCount(bugCount) {
    this.bugCount = bugCount;
    return this;
  }
  build() {
    return new Game(
      this.gameDuration, //
      this.carrotCount,
      this.bugCount
    );
  }
}

class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.gameField = new Field(this.carrotCount, this.bugCount);
    this.gameField.setEventListener(this.onFieldClick);
    this.timerIndicator = document.querySelector(".game__timer");
    this.gameScore = document.querySelector(".game__score");
    this.gameBtn = document.querySelector(".game__button");
    this.gameBtn.addEventListener("click", () => {
      if (this.started) {
        this.stop();
      } else {
        this.start();
      }
    });
  }

  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  stop() {
    this.finishCheck();
    sound.playAlert();
    this.onGameStop && this.onGameStop(Reason.cancel);
  }

  start() {
    this.started = true;
    this.initGame();
    this.showStopButton();
    this.showTimerAndScore();
    this.startGameTimer();
    sound.playBg();
  }

  initGame() {
    this.score = 0;
    this.gameScore.innerText = this.carrotCount;
    this.gameField.init();
  }

  showStopButton() {
    const icon = this.gameBtn.querySelector(".fas");
    icon.classList.add("fa-stop");
    icon.classList.remove("fa-play");
    this.gameBtn.style.visibility = "visible";
  }

  showTimerAndScore() {
    this.timerIndicator.style.visibility = "visible";
    this.gameScore.style.visibility = "visible";
  }

  startGameTimer() {
    let remainingTimeSec = this.gameDuration;
    this.updateTimerText(remainingTimeSec);
    this.timer = setInterval(() => {
      if (remainingTimeSec <= 0) {
        clearInterval(this.timer);
        this.finish(this.score === this.carrotCount);
        return;
      }
      this.updateTimerText(--remainingTimeSec);
    }, 1000);
  }

  updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    this.timerIndicator.innerHTML = `${minutes}:${seconds}`;
  }

  onFieldClick = (item) => {
    if (!this.started) {
      return;
    }
    if (item === "carrot") {
      this.score++;
      sound.playCarrot();
      this.updateScoreBoard();
      if (this.score === this.carrotCount) {
        this.finish(true);
      }
    } else if (item === "bug") {
      this.finish(false);
    }
  };

  finish(win) {
    this.finishCheck(win);
    if (win) {
      sound.playWin();
    } else {
      sound.playBug();
    }
    this.onGameStop && this.onGameStop(win ? Reason.win : Reason.lose);
  }

  finishCheck() {
    this.started = false;
    this.hideGameButton();
    this.stopGameTimer();
    sound.stopBg();
  }

  updateScoreBoard() {
    this.gameScore.innerText = this.carrotCount - this.score;
  }

  hideGameButton() {
    this.gameBtn.style.visibility = "hidden";
  }

  stopGameTimer() {
    clearInterval(this.timer);
  }
}

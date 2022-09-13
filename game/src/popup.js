"use strict";

export default class PopUp {
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popUpText = document.querySelector(".pop-up__message");
    this.popUpRefresh = document.querySelector(".pop-up__refresh");
    this.popUpRefresh.addEventListener("click", () => {
      this.onStartGame && this.onStartGame();
      this.hide();
    });
  }

  setPopUpRefresh(onStartGame) {
    this.onStartGame = onStartGame;
  }

  hide() {
    this.popUp.classList.add("pop-up--hide");
  }

  show(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove("pop-up--hide");
  }
}

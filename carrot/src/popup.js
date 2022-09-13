export default class popUp {
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popUpTitle = document.querySelector(".pop-up__text");
    this.replayBtn = document.querySelector(".pop-up__btn");
    this.replayBtn.addEventListener("click", () => {
      this.onField && this.onField();
      this.hide();
    });
  }
  setAddEvent(onFunction) {
    this.onField = onFunction;
  }
  show() {
    this.popUp.style.visibility = "visible";
  }
  hide() {
    this.popUp.style.visibility = "hidden";
  }
  updateTitle(txt) {
    this.popUpTitle.innerText = `${txt}`;
  }
}

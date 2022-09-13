"use strict";

import { GameBuilder, Reason } from "./game.js";
import PopUp from "./popup.js";

const CARROT_COUNT = 3;
const BUG_COUNT = 3;
const GAME_DURATION_SEC = 5;

const gameFinishPopUp = new PopUp();
gameFinishPopUp.setPopUpRefresh(() => {
  game.start();
});
const gameBuilder = new GameBuilder()
  .gameDuration(GAME_DURATION_SEC)
  .carrotCount(CARROT_COUNT)
  .bugCount(BUG_COUNT);

const game = gameBuilder.build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "REPLAY❓";
      break;
    case Reason.win:
      message = "YOU WON 🎉";
      break;
    case Reason.lose:
      message = "YOU LOST 💩";
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishPopUp.show(message);
});

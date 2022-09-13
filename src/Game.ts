import { Board, DeadZone } from "./Board";
import { Player, PlayerType } from "./Player";
import "./Piece";

export class Game {
  readonly upperDeadZone = new DeadZone("upper");
  readonly lowerDeadZone = new DeadZone("lower");

  readonly upperPlayer = new Player(PlayerType.UPPER);
  readonly lowerPlayer = new Player(PlayerType.LOWER);

  readonly board: Board = new Board(this.upperPlayer, this.lowerPlayer);

  constructor() {
    const boardContainer = document.querySelector(".board-container");
    if (boardContainer.firstChild) {
      boardContainer.firstChild.remove();
    }
    boardContainer.appendChild(this.board._el);

    this.board.render();
  }
}

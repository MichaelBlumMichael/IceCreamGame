import { GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from "./setup";

class GameBoard {
  constructor(gameDOMGrid) {
    this.icecreamCount = 0;
    this.grid = [];
    this.gameDOMGrid = gameDOMGrid;
  }

  showGameStatus(gameWin) {
    // Create and show game win or game over
    const div = document.createElement("div");
    div.classList.add("game-status");
    div.innerHTML = `${gameWin ? "WIN!" : "GAME OVER!"}`;
    this.gameDOMGrid.appendChild(div);
  }

  createGrid(level) {
    this.icecreamCount = 0;
    this.grid = [];
    this.gameDOMGrid.innerHTML = "";
    // set correct amount of columns based on Grid Size and Cell Size
    this.gameDOMGrid.style.cssText = `grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px);`;

    level.forEach((square) => {
      const div = document.createElement("div");
      div.classList.add("square", CLASS_LIST[square]);
      div.style.cssText = `width: ${CELL_SIZE}px; height: ${CELL_SIZE}px;`;
      this.gameDOMGrid.appendChild(div);
      this.grid.push(div);

      // counts icecreams
      if (CLASS_LIST[square] === OBJECT_TYPE.ICECREAM) this.icecreamCount++;
    });
  }

  //adds styling to a div in the grid
  addObject(pos, classesArr) {
    this.grid[pos].classList.add(...classesArr);
  }

  removeObject(pos, classes) {
    this.grid[pos].classList.remove(...classes);
  }

  objectExist = (pos, object) => {
    // returns a bool
    return this.grid[pos].classList.contains(object);
  };

  rotateDiv(pos, deg) {
    this.grid[pos].style.transform = `rotate(${deg}deg)`;
  }

  moveCharacter(character) {
    if (character.shouldMove()) {
      const { nextMovePos, direction } = character.getNextMove(
        this.objectExist.bind(this)
      );
      const { classesToRemove, classesToAdd } = character.makeMove();

      if (character.rotation && nextMovePos !== character.pos) {
        // Rotate
        this.rotateDiv(nextMovePos, character.dir.rotation);
        // Rotate the previous div back
        this.rotateDiv(character.pos, 0);
      }

      this.removeObject(character.pos, classesToRemove);
      this.addObject(nextMovePos, classesToAdd);
      character.setNewPos(nextMovePos, direction);
    }
  }

  static createGameBoard(gameDOMGrid, level) {
    const board = new this(gameDOMGrid);
    board.createGrid(level);
    return board;
  }
}

export default GameBoard;

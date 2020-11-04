import { LEVEL, OBJECT_TYPE } from "./setup";
import { randomMovement } from "./sharkMoves";

import GameBoard from "./GameBoard";
import Penguin from "./Penguin";
import Shark from "./Shark";

const gameDOMGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");

const GLOBAL_SPEED = 80; //m seconds
const gameBoard = GameBoard.createGameBoard(gameDOMGrid, LEVEL);

let score = 0;
let timer = null;
let gameWin = false;

function gameOver(penguin) {
  document.removeEventListener("keydown", (e) =>
    penguin.handleKeyInput(e, gameBoard.objectExist)
  );

  gameBoard.showGameStatus(gameWin);
  clearInterval(timer);
  startButton.classList.remove("hide");
}

function checkCollision(penguin, sharks) {
  const collidedShark = sharks.find((shark) => penguin.pos === shark.pos);

  if (collidedShark) {
    gameBoard.removeObject(penguin.pos, [OBJECT_TYPE.penguin]);
    gameOver(penguin);
  }
}

function gameLoop(penguin, sharks) {
  gameBoard.moveCharacter(penguin);
  checkCollision(penguin, sharks);
  sharks.forEach((shark) => gameBoard.moveCharacter(shark));
  checkCollision(penguin, sharks);

  //check if penguin eats icecreams
  if (gameBoard.objectExist(penguin.pos, OBJECT_TYPE.ICECREAM)) {
    gameBoard.removeObject(penguin.pos, [OBJECT_TYPE.ICECREAM]);
    gameBoard.icecreamCount--;
    score += 10;
  }

  //check if penguin eats bad fish
  if (gameBoard.objectExist(penguin.pos, OBJECT_TYPE.BADFISH)) {
    gameBoard.removeObject(penguin.pos, [OBJECT_TYPE.BADFISH]);
    score -= 100;
    score = score < 0 ? 0 : score;
  }

  //check if all icecreams have been eaten
  if (gameBoard.icecreamCount === 0) {
    gameWin = true;
    gameOver(penguin);
  }

  //show score
  scoreTable.innerHTML = score;
}

function startGame() {
  gameWin = false;
  score = 0;

  startButton.classList.add("hide");
  gameBoard.createGrid(LEVEL);

  const penguin = new Penguin(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PENGUIN]);
  document.addEventListener("keydown", (e) => {
    penguin.handleKeyInput(e, gameBoard.objectExist);
  });

  //use a loop TODO
  const sharks = [
    new Shark(5, 188, randomMovement, OBJECT_TYPE.SHARK),
    new Shark(4, 209, randomMovement, OBJECT_TYPE.SHARK),
    new Shark(3, 230, randomMovement, OBJECT_TYPE.SHARK),
    new Shark(2, 251, randomMovement, OBJECT_TYPE.SHARK),
  ];

  timer = setInterval(() => {
    gameLoop(penguin, sharks);
  }, GLOBAL_SPEED);
}

//init game
startButton.addEventListener("click", startGame);

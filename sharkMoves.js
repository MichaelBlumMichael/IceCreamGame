import { DIRECTIONS, OBJECT_TIPE, OBJECT_TYPE } from "./setup";

//random movements
export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;
  //create an array from the directions object.
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.SHARK)
  ) {
    //get random key from key array
    const key = keys[Math.floor(Math.random() * keys.length)];

    //set the next move
    dir = DIRECTIONS[key];
    nextMovePos = position + dir.movement;
  }

  return { nextMovePos, direction: dir };
}

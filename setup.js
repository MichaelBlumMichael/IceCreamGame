export const GRID_SIZE = 20;
export const CELL_SIZE = 30;
export const DIRECTIONS = {
  ArrowLeft: {
    code: 37,
    movement: -1,
    rotation: 180,
  },
  ArrowUp: {
    code: 38,
    movement: -GRID_SIZE,
    rotation: 270,
  },
  ArrowRight: {
    code: 39,
    movement: 1,
    rotation: 0,
  },
  ArrowDown: {
    code: 40,
    movement: GRID_SIZE,
    rotation: 90,
  },
};

export const OBJECT_TYPE = {
  BLANK: "blank",
  WALL: "wall",
  ICECREAM: "icecream",
  SHARK: "shark",
  PENGUIN: "penguin",
  BADFISH: "badfish",
};

// Lookup array for classes
export const CLASS_LIST = [
  OBJECT_TYPE.BLANK,
  OBJECT_TYPE.WALL,
  OBJECT_TYPE.ICECREAM,
  OBJECT_TYPE.SHARK,
  OBJECT_TYPE.PENGUIN,
  OBJECT_TYPE.BADFISH,
];

// prettier-ignore
export const LEVEL = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 5, 0, 0, 2, 0, 2, 0, 2, 1, 1, 0, 0, 2, 20, 0, 0, 2, 5, 1,
  1, 2, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 2, 1, 1, 0, 1,
  1, 0, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 0, 1,
  1, 2, 0, 2, 0, 2, 0, 0, 2, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 1,
  1, 2, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 2, 1,
  1, 2, 0, 0, 2, 1, 0, 0, 0, 1, 1, 0, 2, 0, 1, 0, 2, 0, 2, 1,
  1, 1, 1, 1, 0, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
  0, 0, 0, 1, 0, 1, 2, 0, 0, 0, 2, 0, 2, 2, 1, 0, 1, 0, 0, 0,
  0, 0, 0, 1, 2, 1, 0, 1, 9, 9, 9, 9, 1, 0, 1, 0, 1, 0, 0, 0,
  1, 1, 1, 1, 0, 1, 0, 1, 9, 9, 9, 9, 1, 0, 1, 2, 1, 1, 1, 1, 
  1, 0, 0, 0, 2, 2, 0, 1, 9, 9, 9, 9, 1, 2, 2, 0, 0, 0, 0, 1, 
  1, 1, 1, 1, 0, 1, 2, 1, 9, 9, 9, 9, 1, 0, 1, 2, 1, 1, 1, 1, 
  0, 0, 0, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0,
  0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0,
  1, 1, 1, 1, 0, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 1, 2, 0, 2, 1, 1, 2, 0, 2, 1, 0, 2, 0, 2, 1,
  1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 0, 1,
  1, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 2, 2, 0, 0, 0, 0, 2, 0, 1,
  1, 0, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 0, 1,
  1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 2, 1, 1, 2, 1,
  1, 5, 2, 0, 0, 2, 0, 2, 0, 1, 1, 0, 2, 0, 0, 0, 2, 0, 5, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

import { GRID, SQUARE } from 'typings';

interface IArgs {
  col: number;
  grid: GRID;
  row: number;
}

function getWorkingSquare({ col, grid, row }: IArgs): SQUARE {
  const square: Partial<SQUARE> = [];

  if (row < 3) {
    if (col < 3) {
      for (let i = 0; i < 3; i++) {
        square.push([grid[i][0], grid[i][1], grid[i][2]]);
      }
    } else if (col < 6) {
      for (let i = 0; i < 3; i++) {
        square.push([grid[i][3], grid[i][4], grid[i][5]]);
      }
    } else {
      for (let i = 0; i < 3; i++) {
        square.push([grid[i][6], grid[i][7], grid[i][8]]);
      }
    }
  } else if (row < 6) {
    if (col < 3) {
      for (let i = 3; i < 6; i++) {
        square.push([grid[i][0], grid[i][1], grid[i][2]]);
      }
    } else if (col < 6) {
      for (let i = 3; i < 6; i++) {
        square.push([grid[i][3], grid[i][4], grid[i][5]]);
      }
    } else {
      for (let i = 3; i < 6; i++) {
        square.push([grid[i][6], grid[i][7], grid[i][8]]);
      }
    }
  } else {
    if (col < 3) {
      for (let i = 6; i < 9; i++) {
        square.push([grid[i][0], grid[i][1], grid[i][2]]);
      }
    } else if (col < 6) {
      for (let i = 6; i < 9; i++) {
        square.push([grid[i][3], grid[i][4], grid[i][5]]);
      }
    } else {
      for (let i = 6; i < 9; i++) {
        square.push([grid[i][6], grid[i][7], grid[i][8]]);
      }
    }
  }

  return square as SQUARE;
}

export default getWorkingSquare;

import global from 'global';
import {
  checkGrid,
  getWorkingSquare,
  isInCol,
  isInRow,
  isInSquare
} from 'utils';
import { GRID, NUMBERS } from 'typings';

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solveGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 9 * 9; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      for (const value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ col, grid, value })) {
            const square = getWorkingSquare({ col, grid, row });
            if (!isInSquare({ square, value })) {
              grid[row][col] = value;

              if (checkGrid(grid)) {
                global.counter++;
              } else if (solveGrid(grid)) {
                return true;
              }
            }
          }
        }
      }

      break;
    }
  }

  grid[row][col] = 0;
}

export default solveGrid;

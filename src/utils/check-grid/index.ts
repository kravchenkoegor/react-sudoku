import { GRID } from 'typings';

function checkGrid(grid: GRID): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        return false;
      }
    }
  }

  return true;
}

export default checkGrid;

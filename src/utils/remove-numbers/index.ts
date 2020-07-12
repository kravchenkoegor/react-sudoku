import global from 'global';
import { copyGrid, solveGrid } from 'utils';
import { GRID } from 'typings';

function getRandomIndex() {
  return Math.floor(Math.random() * 9);
}

function removeNumbers(grid: GRID, attempts: number = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);
    global.counter = 0;
    solveGrid(gridCopy);

    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }

  return grid;
}

export default removeNumbers;

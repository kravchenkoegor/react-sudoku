import { GRID, NUMBERS } from 'typings';

interface IArgs {
  col: number;
  grid: GRID;
  value: NUMBERS;
}

function isInCol({ col, grid, value }: IArgs): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) {
      return true;
    }
  }

  return false;
}

export default isInCol;

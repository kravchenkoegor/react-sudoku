import { GRID, NUMBERS } from 'typings';

interface IArgs {
  grid: GRID;
  row: number;
  value: NUMBERS;
}

function isInRow({ grid, row, value }: IArgs): boolean {
  return grid[row].includes(value);
}

export default isInRow;

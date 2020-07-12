import getWorkingSquare from './';
import { GRID } from 'typings';

describe('getWorkingSquare', () => {
  it('should identify correct square with given row and column', () => {
    const grid: GRID = [
      [8, 4, 2, 6, 5, 1, 3, 9, 7],
      [5, 3, 7, 2, 8, 9, 6, 4, 1],
      [6, 9, 1, 7, 3, 4, 5, 2, 8],
      [1, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 5, 8, 1, 9, 2, 4, 6, 3],
      [9, 2, 4, 3, 7, 6, 1, 8, 5],
      [4, 7, 6, 5, 1, 8, 2, 3, 9],
      [2, 8, 5, 9, 6, 3, 7, 1, 4],
      [3, 1, 9, 3, 1, 7, 8, 5, 6]
    ];

    expect(getWorkingSquare({ col: 0, grid, row: 2 })).toStrictEqual([
      [8, 4, 2],
      [5, 3, 7],
      [6, 9, 1]
    ]);

    expect(getWorkingSquare({ col: 3, grid, row: 6 })).toStrictEqual([
      [5, 1, 8],
      [9, 6, 3],
      [3, 1, 7]
    ]);

    expect(getWorkingSquare({ col: 7, grid, row: 3 })).toStrictEqual([
      [9, 7, 2],
      [4, 6, 3],
      [1, 8, 5]
    ]);
  });
});

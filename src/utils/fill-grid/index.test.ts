import fillGrid from './';
import { GRID } from 'typings';

describe('fillGrid', () => {
  it('should fill an empty grid', () => {
    const grid: GRID = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    fillGrid(grid);

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1);
        expect(grid[row][col]).toBeLessThanOrEqual(9);
      }
    }
  });

  it('should fill a partially filled grid', () => {
    const grid: GRID = [
      [0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 3, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 4, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 5, 0, 0, 0],
      [0, 0, 0, 0, 6, 0, 0, 0, 0],
      [0, 0, 0, 7, 0, 0, 0, 0, 0],
      [0, 0, 8, 0, 0, 0, 0, 0, 0],
      [0, 9, 0, 0, 0, 0, 0, 0, 0]
    ];
    fillGrid(grid);

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1);
        expect(grid[row][col]).toBeLessThanOrEqual(9);
      }
    }
  });
});

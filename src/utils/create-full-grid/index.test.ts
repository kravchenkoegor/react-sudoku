import createFullGrid from './';
import { GRID } from 'typings';

describe('createFullGrid', () => {
  it('should return a valid sudoku grid', () => {
    const grid: GRID = createFullGrid();
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1);
        expect(grid[row][col]).toBeLessThanOrEqual(9);
      }
    }
  });
});

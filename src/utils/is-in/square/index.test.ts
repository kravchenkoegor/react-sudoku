import isInSquare from './';
import { SQUARE } from 'typings';

describe('isInSquare', () => {
  it('returns TRUE if the value IS in square', () => {
    const square: SQUARE = [
      [5, 1, 8],
      [9, 6, 3],
      [3, 1, 7]
    ];

    expect(isInSquare({ square, value: 9 })).toBeTruthy();
    expect(isInSquare({ square, value: 1 })).toBeTruthy();
    expect(isInSquare({ square, value: 3 })).toBeTruthy();
  });

  it('returns FALSE if the value IS NOT in square', () => {
    const square: SQUARE = [
      [0, 1, 8],
      [9, 6, 3],
      [3, 1, 0]
    ];

    expect(isInSquare({ square, value: 7 })).toBeFalsy();
    expect(isInSquare({ square, value: 5 })).toBeFalsy();
    expect(isInSquare({ square, value: 2 })).toBeFalsy();
  });
});

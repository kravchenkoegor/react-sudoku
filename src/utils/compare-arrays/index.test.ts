import compareArrays from './';

describe('compareArrays', () => {
  it('should return true if arrays are equal', () => {
    expect(compareArrays([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(
      compareArrays(
        [[1, 2, 3, 4, 5], [9, 8, 7, 6, 5], [[3, 3, 3]]],
        [[1, 2, 3, 4, 5], [9, 8, 7, 6, 5], [[3, 3, 3]]]
      )
    ).toBe(true);
    expect(
      compareArrays(
        Object.entries({ a: 2, b: 3, c: 5 }),
        Object.entries({ a: 2, b: 3, c: 5 })
      )
    ).toBe(true);
    expect(compareArrays('asdfgh'.split(''), 'asdfgh'.split(''))).toBe(true);
  });

  it('should return false if arrays are not equal', () => {
    expect(compareArrays([1, 2, 3], [0, 2, 3])).toBe(false);
    expect(compareArrays([1, 2, 3], [0, 2, 3, 4])).toBe(false);
    expect(
      compareArrays(
        [[1, 2, 3, 4, 5], [9, 8, 7, 6, 5], [[3, 3, 3]]],
        [[1, 2, 3, 4, 5], [0, 8, 7, 6, 5], [[3, 3, 3, 4]]]
      )
    ).toBe(false);
    expect(
      compareArrays(
        Object.entries({ a: 2, b: 3, c: 6 }),
        Object.entries({ a: 2, b: 3, c: 5 })
      )
    ).toBe(false);
    expect(compareArrays('asdfgh'.split(''), 'wuheuwheuw'.split(''))).toBe(
      false
    );
  });
});

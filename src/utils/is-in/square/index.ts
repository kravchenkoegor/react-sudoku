import { NUMBERS, SQUARE } from 'typings';

interface IArgs {
  square: SQUARE;
  value: NUMBERS;
}

function isInSquare({ square, value }: IArgs): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;

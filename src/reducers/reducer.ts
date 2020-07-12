import { AnyAction } from 'redux';
import { IReducer } from './interfaces';
import { compareArrays, copyGrid, createFullGrid, removeNumbers } from 'utils';
import * as types from './types';
import { GRID } from 'typings';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid();
      const grid = removeNumbers(copyGrid(solvedGrid));

      return {
        ...state,
        grid,
        solvedGrid,
        workingGrid: copyGrid(grid)
      };
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords
      };
    case types.FILL_BLOCK:
      if (state.workingGrid && state.solvedGrid) {
        const { coords, value } = action;
        const [row, col] = coords;
        if (state.solvedGrid[row][col] !== value) {
          alert('Incorrect option!');
          return state;
        } else {
          state.workingGrid[row][col] = value;

          if (compareArrays(state.workingGrid, state.solvedGrid)) {
            alert('Completed!');
          }

          return {
            ...state,
            workingGrid: [...state.workingGrid] as GRID
          };
        }
      }

      return state;
    default:
      return state;
  }
}

export default reducer;

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { Button } from 'components';
import { fillBlock, IReducer } from 'reducers';
import { BLOCK_COORDS, N, NUMBERS } from 'typings';

interface IState {
  selectedBlock?: BLOCK_COORDS;
  selectedValue: N;
}

const NumbersButton: React.FC<{ value: NUMBERS }> = ({ value }) => {
  const { selectedBlock, selectedValue } = useSelector<IReducer, IState>(
    state => {
      return {
        selectedBlock: state.selectedBlock,
        selectedValue:
          state.workingGrid && state.selectedBlock
            ? state.workingGrid[state.selectedBlock[0]][state.selectedBlock[1]]
            : 0
      };
    }
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const fill = useCallback(() => {
    if (selectedBlock && !selectedValue) {
      dispatch(fillBlock(value, selectedBlock));
    }
  }, [dispatch, selectedBlock, selectedValue, value]);

  return <Button onClick={fill}>{value}</Button>;
};

export default NumbersButton;

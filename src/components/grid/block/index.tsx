import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { IReducer, selectBlock } from 'reducers';
import Block from './styles';
import { INDEX, N } from 'typings';

interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  isActive: boolean;
  isPuzzle: boolean;
  value: N;
}

const GridBlock: React.FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(state => {
    const { grid, selectedBlock, workingGrid } = state;

    return {
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      isPuzzle: Boolean(grid && grid[rowIndex][colIndex]),
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0
    };
  });
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const handleClick = () => {
    if (!state.isActive) {
      dispatch(selectBlock([rowIndex, colIndex]));
    }
  };

  return (
    <Block
      active={state.isActive}
      puzzle={state.isPuzzle}
      onClick={handleClick}
    >
      {!state.value ? '' : state.value}
    </Block>
  );
};

export default GridBlock;

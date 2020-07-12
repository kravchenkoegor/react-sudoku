import React, { Children, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMouseTrap from 'react-hook-mousetrap';
import { AnyAction, Dispatch } from 'redux';
import { createGrid, fillBlock, IReducer, selectBlock } from 'reducers';
import styled, { css } from 'styled-components';
import GridBlock from './block';
import { GRID, INDEX, BLOCK_COORDS, N, NUMBERS } from 'typings';

const Container = styled.div`
  color: '#000';
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;

    &:first-child {
      border-top: 4px solid ${theme.colors.black};
    }

    &:nth-child(3n) {
      border-bottom: 3px solid ${theme.colors.black};
    }

    &:last-child {
      border-bottom: 4px solid ${theme.colors.black};
    }
  `}
`;

interface IState {
  selectedBlock?: BLOCK_COORDS;
  selectedValue?: N;
  solvedGrid?: GRID;
}

const Grid: React.FC = () => {
  const { selectedBlock, selectedValue, solvedGrid } = useSelector<
    IReducer,
    IState
  >(state => {
    return {
      selectedBlock: state.selectedBlock,
      selectedValue:
        state.workingGrid && state.selectedBlock
          ? state.workingGrid[state.selectedBlock[0]][state.selectedBlock[1]]
          : 0,
      solvedGrid: state.solvedGrid
    };
  });
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  const fill = useCallback(
    (n: NUMBERS) => {
      if (selectedBlock && !selectedValue) {
        dispatch(fillBlock(n, selectedBlock));
      }
    },
    [dispatch, selectedBlock, selectedValue]
  );

  useEffect(() => {
    !solvedGrid && create();
  }, [solvedGrid, create]);

  function moveDown() {
    if (selectedBlock && selectedBlock[0] < 8) {
      const row = (selectedBlock[0] + 1) as INDEX;
      const col = selectedBlock[1];
      dispatch(selectBlock([row, col]));
      console.log('down');
    }
  }

  function moveUp() {
    if (selectedBlock && selectedBlock[0] > 0) {
      const row = (selectedBlock[0] - 1) as INDEX;
      const col = selectedBlock[1];
      dispatch(selectBlock([row, col]));
      console.log('up');
    }
  }

  function moveLeft() {
    if (selectedBlock && selectedBlock[1] > 0) {
      const row = selectedBlock[0];
      const col = (selectedBlock[1] - 1) as INDEX;
      dispatch(selectBlock([row, col]));
      console.log('left');
    }
  }

  function moveRight() {
    if (selectedBlock && selectedBlock[1] < 8) {
      const row = selectedBlock[0];
      const col = (selectedBlock[1] + 1) as INDEX;
      dispatch(selectBlock([row, col]));
      console.log('right');
    }
  }

  useMouseTrap('down', moveDown);
  useMouseTrap('up', moveUp);
  useMouseTrap('left', moveLeft);
  useMouseTrap('right', moveRight);

  useMouseTrap('1', () => fill(1));
  useMouseTrap('2', () => fill(2));
  useMouseTrap('3', () => fill(3));
  useMouseTrap('4', () => fill(4));
  useMouseTrap('5', () => fill(5));
  useMouseTrap('6', () => fill(6));
  useMouseTrap('7', () => fill(7));
  useMouseTrap('8', () => fill(8));
  useMouseTrap('9', () => fill(9));

  return (
    <Container>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row>
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <GridBlock
                  rowIndex={rowIndex as INDEX}
                  colIndex={colIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;

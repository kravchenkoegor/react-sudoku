import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { createGrid } from 'reducers';
import { Button } from 'components';

const NewButton: React.FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>();
  const createNewGrid = useCallback(() => {
    if (window.confirm('Are you sure you want to a start new game?')) {
      dispatch(createGrid());
    }
  }, [dispatch]);
  return <Button onClick={createNewGrid}>Start new game</Button>;
};

export default NewButton;

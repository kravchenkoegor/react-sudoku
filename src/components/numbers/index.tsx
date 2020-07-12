import React from 'react';
import styled from 'styled-components';
import Button from './button';
import { NUMBERS } from 'typings';

const Container = styled.div`
  display: flex;
`;

const Numbers: React.FC = () => {
  return (
    <Container>
      {React.Children.toArray(
        ([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map(value => (
          <Button value={value} />
        ))
      )}
    </Container>
  );
};

export default Numbers;

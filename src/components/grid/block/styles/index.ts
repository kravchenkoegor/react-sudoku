import styled, { css } from 'styled-components';

const Block = styled.div<{ active?: boolean; puzzle?: boolean }>`
  ${({ active, puzzle, theme }) => css`
    align-items: center;
    background-color: ${active ? theme.colors.blue : theme.colors.white};
    border: 1px solid ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    font-size: 20px;
    font-weight: ${!puzzle ? 'normal' : 'bold'};
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      content: '';
      float: left;
      padding-top: 100%;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }

    &:first-child {
      border-left: 4px solid ${theme.colors.black};
    }

    &:nth-child(3n) {
      border-right: 3px solid ${theme.colors.black};
    }

    &:last-child {
      border-right: 4px solid ${theme.colors.black};
    }
  `}
`;

export default Block;

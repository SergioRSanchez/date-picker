import styled, { css } from 'styled-components';

export const Days = styled.td`
  ${props => props.state === 'selected' && css`
    background-color: #6200EE;
    color: #fff;
    font-weight: 700;
    &:hover {
      background-color: #4e00be
    }
  `}

  ${props => props.state === 'nonPertenceMonth' && css`
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: #fff;
    }
  `}
`;
// @flow

import styled from 'styled-components';

export const Vector = styled.div.withConfig({
  displayName: 'Vector',
})`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  box-sizing: border-box;

  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'center'}

  min-width: 60px;
  width: 100%;
  height: 100%;
`;

export const WrapVector = styled.div.withConfig({
  displayName: 'WrapVector',
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

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

export const CardBox = styled.div.withConfig({
  displayName: 'CardBox',
})`
  display: flex;
  flex-wrap: wrap;
  flex: 1 auto;
  justify-content: flex-start;
  align-items: center;
  margin-left: 290px;
  margin-top: 90px;
  height: 100%;
  overflow-x: hidden;
`;

export const Screen = styled.div.withConfig({
  displayName: 'Screen',
})`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

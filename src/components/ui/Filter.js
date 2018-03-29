// @flow

import styled from 'styled-components';

export const FilterBox = styled.div.withConfig({
  displayName: 'FilterBox',
})`
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: 1%;
  margin-top: 90px;
  padding: 1%;
  box-sizing: border-box;

  width: 200px;
  height: 80%;

  background-color: #a094b7;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

// @flow

import styled from 'styled-components';

export const SearchBox = styled.div.withConfig({
  displayName: 'SearchBox',
})`
  position: fixed;
  display: flex;
  margin: 1%;
  padding: 1%;
  box-sizing: border-box;

  width: 98%;
  height: 70px;

  background-color: #a094b7;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

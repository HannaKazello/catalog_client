// @flow

import styled from 'styled-components';

export const SearchIcon = styled.i.attrs({
  className: 'material-icons white-text',
})`
`;

export const MainInputBox = styled.div.attrs({
  className: '',
})`
  align-self: flex-end;
  flex: 1 0;
  display: flex;
  align-items: center;
`;

export const Input = styled.input.attrs({
  className: 'white-text col s12',
})`
  border-bottom-color: white !important ;
  box-shadow: none !important ;
`;

export const NavbarBox = styled.div.withConfig({
  displayName: 'Navbar',
})`
  position: fixed;
  display: flex;
  align-items: baseline;
  padding: 1%;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  background-color: #0288d1;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  > a {
    margin: 1%;
    padding: 0.5%;
    color: white;
  }
`;

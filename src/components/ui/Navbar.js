// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchIcon = styled.i.attrs({
  className: 'material-icons white-text',
})`
`;

const MainInputBox = styled.div.attrs({
  className: '',
})`
  align-self: flex-end;
  flex: 1 0;
  display: flex;
  align-items: center;
`;

const Input = styled.input.attrs({
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

class Navbar extends PureComponent {
  onEnter = (event: SyntheticKeyboardEvent<*>) => {

  }
  render() {
    console.log(this.props);
    return (
      <NavbarBox>
        <Link to="/login">Войти</Link>
        <Link to="/favorite">Избранное</Link>
        <Link to="/recomendations">Рекомендации</Link>
        <MainInputBox>
          <SearchIcon>search</SearchIcon>
          <Input type="text" placeholder="search" />
        </MainInputBox>
      </NavbarBox>
    );
  }
}

export default Navbar;

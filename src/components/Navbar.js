// @flow

import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NavbarBox, MainInputBox, SearchIcon, Input } from './ui/Navbar';

class Navbar extends PureComponent {
  onInputChange = (e: SyntheticInputEvent) => {
    this.props.search(e.target.value);
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <NavbarBox>
        {
          isAuthenticated
          ? <Link to="/logout">Выйти</Link>
          : <Link to="/login">Войти</Link>
        }
        { !isAuthenticated && <Link to="/signin">Зарегистрироваться</Link>}
        { isAuthenticated &&
          <Fragment>
            <Link to="/favorite">Избранное</Link>
            <Link to="/recomendations">Рекомендации</Link>
          </Fragment>}
        <MainInputBox>
          <SearchIcon>search</SearchIcon>
          <Input type="text" placeholder="search" onChange={this.onInputChange} />
        </MainInputBox>
      </NavbarBox>
    );
  }
}

export default Navbar;

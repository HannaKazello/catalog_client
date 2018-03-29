// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { Screen, CardBox } from './ui/Grid';
import Card from './Card';
import { FilterBox } from './ui/Filter';
import { SearchBox } from './ui/Search';

class Catalog extends PureComponent {
  render() {
    const { books } = this.props;

    return (
      <Screen>
        <SearchBox />
        <FilterBox />
        <CardBox>
          <Card book={books[0]} />
          <Card book={books[1]} />
          <Card book={books[0]} />
          <Card book={books[1]} />
        </CardBox>
      </Screen>
    );
  }
}

export default Catalog;

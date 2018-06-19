// @flow

import React, { PureComponent } from 'react';

import { Screen, CardBox } from './ui/Grid';
import Card from './Card';
import Buckets from '../containers/Buckets';
import SearchBox from '../containers/Navbar';

class Catalog extends PureComponent {
  render() {
    const { books } = this.props;

    return (
      <Screen>
        <SearchBox />
        <Buckets />
        <CardBox>
          {books.map(book => <Card key={book.belmarcId} book={book} showRecord={this.props.showRecord} />)}
        </CardBox>
      </Screen>
    );
  }
}

export default Catalog;

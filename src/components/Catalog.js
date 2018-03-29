// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { Vector, WrapVector } from './ui/Grid';
import Card from './Card';

class Catalog extends PureComponent {
  render() {
    const { books } = this.props;

    return (
      <WrapVector>
        <Card book={books[0]} />
        <Card book={books[1]} />
        <Card book={books[0]} />
        <Card book={books[1]} />
      </WrapVector>
    );
  }
}

export default Catalog;

// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { Vector } from './ui/Grid';
import Card from './Card';

class Catalog extends PureComponent {
  render() {
    const { books } = this.props;

    return (
      <Vector justify="space-around">
        <Vector direction="column">
          Hello Catalog
          <div>{books[0].belmarcId}</div>
          <Link
            to="/"
          >
            Home
          </Link>
        </Vector>
        <Vector direction="column">
          <Card book={books[0]} />
          <Card book={books[1]} />
        </Vector>
      </Vector>
    );
  }
}

export default Catalog;

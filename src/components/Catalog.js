// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Catalog extends PureComponent {
  render() {
    const { books } = this.props;

    return (
      <div>
        Hello Catalog
        <span>{books[0].belmarcId}</span>
        <Link
          to="/"
        >
          Home
        </Link>
      </div>
    );
  }
}

export default Catalog;

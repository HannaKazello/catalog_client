// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { CardBox } from './ui/Grid';
import Card from './Card';

class Catalog extends PureComponent {
  render() {
    const { hits } = this.props;

    return (
      <CardBox>
        {hits
          .filter(item => item._index === 'records')
          .map(record => <Card book={record._source} />)
        }
      </CardBox>
    );
  }
}

export default Catalog;

// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { Vector } from './ui/Grid';
import { Card, Title, About, Author } from './ui/Card';

class Catalog extends PureComponent {
  findField = (field: string) => {
    const { book } = this.props;
    const findedIndex = book.fields.findIndex(el => el.tag.match(field));
    return findedIndex > -1 ? book.fields[findedIndex].value : '';
  }

  render() {
    return (
      <Card>
        <Vector direction="column">
          <Title>{this.findField('Заглавие')}</Title>
          <Author>{this.findField('Автор')}</Author>
          <About>
            {this.findField('Аннотация')}
          </About>
        </Vector>
      </Card>
    );
  }
}

export default Catalog;

// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { Vector } from './ui/Grid';
import { Card, Header } from './ui/Card';

class Catalog extends PureComponent {
  findField = (field: string) => {
    const { book } = this.props;
    const findedIndex = book.fields.findIndex(el => el.tag.match(field));
    return findedIndex > -1 ? book.fields[findedIndex].value : '';
  }

  render() {
    const path = 'pathToFile';

    return (
      <Card>
        <img src={path} alt="cats" />
        <Vector direction="column">
          <Header>{this.findField('Заглавие')}</Header>
          <Header>{this.findField('Автор')}</Header>
          <Header>{this.findField('Аннотация')}</Header>
        </Vector>
      </Card>
    );
  }
}

export default Catalog;

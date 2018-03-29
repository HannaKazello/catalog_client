// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { Vector } from './ui/Grid';
import { Card, Title, About, Author, Publishig, Divider } from './ui/Card';

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
          <About> {this.findField('Аннотация')}</About>
          <Divider />
          <Publishig>
            <div>{this.findField('Место издания')}</div>
            <div>{this.findField('Год издания')}</div>
          </Publishig>
        </Vector>
      </Card>
    );
  }
}

export default Catalog;

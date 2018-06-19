// @flow

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { Vector } from './ui/Grid';
import { Card, Title, Chip, Author, Publishig, Divider, ChipsBox } from './ui/Card';

const findIndex = (el, field) => {
  if (field.notInclude && el.tag.toLowerCase().includes(field.notInclude)) {
    return false;
  }

  const finded = el.tag.toLowerCase().includes(field.find.toLowerCase());

  if (!finded && field.alternatives) {
    const find = field.alternatives.find(alt =>
      el.tag.toLowerCase().includes(alt.toLowerCase()));
    return Boolean(find);
  }

  return finded;
};

class Catalog extends PureComponent {
  findField = (field: Object) => {
    const { book } = this.props;

    const findedIndex = book.fields.findIndex(el =>
      findIndex(el, field));

    return findedIndex > -1 ? book.fields[findedIndex].value : '';
  }

  onClick = () => {
    this.props.showRecord(this.props.book.id);
  }

  render() {
    if (!this.props.book || !this.props.book.fields) {
      return null;
    }
    return (
      <Card onClick={this.onClick}>
        <Vector direction="column">
          <Title>
            {this.findField({
              find: 'заглавие',
            })}
          </Title>
          <Author>
            {this.findField({
              find: 'автор',
              alternatives: ['ответствен'],
              notInclude: 'знак',
            })}
          </Author>
          <Publishig>
            <div>
              {this.findField({
                find: 'место издания',
              })}
            </div>
            <div>
              {this.findField({
                find: 'издательство',
              })}
            </div>
            <div>
              {this.findField({
                find: 'год издания',
                alternatives: ['дата издания'],
              })}
            </div>
          </Publishig>
          <Divider />
          <ChipsBox>
            {this.props.book.references.slice(0, 5).map(el => <Chip>{el.value}</Chip>)}
            {this.props.book.references.length > 5 && <Chip>...</Chip>}
          </ChipsBox>
        </Vector>
      </Card>
    );
  }
}

export default Catalog;

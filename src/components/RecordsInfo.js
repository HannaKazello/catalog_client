// @flow

import React, { PureComponent } from 'react';

import { Screen, CardBox } from './ui/Grid';
import { Chip, ChipsBox } from './ui/Card';
import SearchBox from '../containers/Navbar';

class Catalog extends PureComponent {
  render() {
    const { book } = this.props;

    return (
      <Screen>
        <SearchBox />
        <button className="btn waves-effect waves-light grey" onClick={this.props.back} >
          <i className="material-icons left">arrow_back</i>
          Вернуться
        </button>
        <ChipsBox wrap>
          {this.props.book.references.map(el => <Chip>{el.value}</Chip>)}
        </ChipsBox>
      </Screen>
    );
  }
}

export default Catalog;

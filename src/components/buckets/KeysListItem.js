// @flow

import React, { PureComponent } from 'react';

import { BucketKey, ListItem } from '../ui/Filter';

class KeysListItem extends PureComponent {
  onItemClick = () => {
    this.props.chooseKey(this.props.item);
  }

  render() {
    const { item } = this.props;
    if (!item) {
      return null;
    }

    return (
      <ListItem onClick={this.onItemClick}>
        <BucketKey>{item}</BucketKey>
      </ListItem>
    );
  }
}

export default KeysListItem;

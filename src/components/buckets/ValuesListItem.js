// @flow

import React, { PureComponent } from 'react';

import { BucketKey, ListItem, DocCount } from '../ui/Filter';

class ValuesListItem extends PureComponent {
  onItemClick = () => {
    this.props.filter(this.props.value.key);
  }

  render() {
    const { value, active } = this.props;

    if (!value) {
      return null;
    }

    return (
      <ListItem onClick={this.onItemClick} justify="space-between">
        <BucketKey active={active}>{value.key}</BucketKey>
        <DocCount>{value.doc_count}</DocCount>
      </ListItem>
    );
  }
}

export default ValuesListItem;

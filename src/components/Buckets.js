// @flow

import React, { PureComponent } from 'react';

import { FilterBox, BucketKey, List, ListItem } from './ui/Filter';

class Filter extends PureComponent {
  onEnter = (event: SyntheticKeyboardEvent<*>) => {

  }

  renderListItem = (item: string) => (
    <ListItem>
      <BucketKey>{item}</BucketKey>
    </ListItem>
  )

  render() {
    if (!this.props.buckets) {
      return null;
    }
    return (
      <FilterBox>
        <List>
          {this.props.buckets.slice(0, 33).map(bucket => this.renderListItem(bucket.key))}
        </List>
      </FilterBox>
    );
  }
}

export default Filter;

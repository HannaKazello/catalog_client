// @flow

import React, { PureComponent } from 'react';

import { FilterBox, List, BackIcon } from '../ui/Filter';
import KeysListItem from './KeysListItem';
import ValuesListItem from './ValuesListItem';

class Filter extends PureComponent {
  state = {
    activeComponent: 'keys',
    activeKey: '',
  }

  chooseKey = (key: string) => {
    this.setState({
      activeKey: key,
      activeComponent: 'values',
    });
  }

  backToKeys = () => {
    this.setState({
      activeComponent: 'keys',
      activeKey: '',
    });
  }

  selectValue = (value: string) => {
    this.props.selectValue({ value, key: this.state.activeKey });
  }

  renderKeysListItem = (item: string) => (
    <KeysListItem key={`${item}+key`} item={item} chooseKey={this.chooseKey} />
  )

  renderValuesListItem = (value: Object) => (
    <ValuesListItem
      key={`${value.key}+key`}
      value={value}
      filter={this.selectValue}
      active={this.props.selectedValue && this.props.selectedValue.value === value.key}
    />
  )

  render() {
    const { buckets } = this.props;
    const { activeKey, activeComponent } = this.state;
    if (!this.props.buckets) {
      return null;
    }

    console.log(this.props.selectedValue);

    return (
      <FilterBox>
        {activeComponent === 'values' && <BackIcon onClick={this.backToKeys}>arrow_back</BackIcon>}
        <List>
          {
            activeComponent === 'keys'
            ? buckets.slice(0, 33)
              .map(bucket => this.renderKeysListItem(bucket.key))
            : buckets.slice(0, 32)
              .find(bucket => bucket.key === activeKey)
              .values
              .map(value => this.renderValuesListItem(value))
          }
        </List>
      </FilterBox>
    );
  }
}

export default Filter;

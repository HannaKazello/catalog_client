// @flow

import React, { PureComponent } from 'react';
import { SearchBox, Hits, MenuFilter } from 'searchkit';
import Catalog from './Catalog';
import { SearchBox as Header } from './ui/Search';
import { FilterBox } from './ui/Filter';
import { Screen } from './ui/Grid';

const sourceFilter = [
  'fields.tag',
  'fields.value',
  'references.tag',
  'refernces.value',
];

class Home extends PureComponent {
  render() {
    return (
      <Screen>
        <Header>
          <SearchBox />
        </Header>
        <Hits
          hitsPerPage={50}
          sourceFilter={sourceFilter}
          listComponent={Catalog}
        />
        <FilterBox>
          <MenuFilter
            field="fields.tag.raw"
            fieldOptions={{ type: 'nested', options: { path: 'fields' } }}
            title="Tags"
            id="tags"
          />
        </FilterBox>
      </Screen>
    );
  }
}

export default Home;

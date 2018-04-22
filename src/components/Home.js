// @flow

import React, { PureComponent } from 'react';
import {
  SearchBox,
  Hits,
  MenuFilter,
  ItemList,
  Layout,
  TopBar,
  LayoutBody,
  SideBar,
  HierarchicalMenuFilter,
  RefinementListFilter,
  LayoutResults,
  ActionBar,
  ActionBarRow,
  SelectedFilters,
  ResetFilters,
  NoHits,
  HitsStats,
} from 'searchkit';
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

const Home = () =>
  (
    <Layout>
      <TopBar>
        <SearchBox
          autofocus
          searchOnChange
        />
      </TopBar>
      <LayoutBody>
        <SideBar>
          <HierarchicalMenuFilter
            fields={['fields.tag.raw', 'fields.value']}
            fieldOptions={{ type: 'nested', options: { path: 'fields' } }}
            title="Categories"
            id="categories"
          />
          <RefinementListFilter
            id="references"
            title="References"
            field="references.tag.raw"
            fieldOptions={{ type: 'nested', options: { path: 'fields' } }}
            operator="AND"
            size={10}
          />
          <MenuFilter
            field="fields.tag.raw"
            fieldOptions={{ type: 'nested', options: { path: 'fields' } }}
            title="Tags"
            id="tags"
            listComponent={ItemList}
          />
        </SideBar>
        <LayoutResults>
          <ActionBar>

            <ActionBarRow>
              <HitsStats />
            </ActionBarRow>

            <ActionBarRow>
              <SelectedFilters />
              <ResetFilters />
            </ActionBarRow>

          </ActionBar>
          <Hits
            mod="sk-hits-glistrid"
            hitsPerPage={50}
            sourceFilter={sourceFilter}
            listComponent={Catalog}
          />
          <NoHits />
        </LayoutResults>
      </LayoutBody>
    </Layout>
  );

export default Home;

// @flow

import React from 'react';
import {
  SearchBox,
  Hits,
  MenuFilter,
  ItemList,
  Layout,
  TopBar,
  LayoutBody,
  SideBar,
  HierarchicalRefinementFilter,
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
          <HierarchicalRefinementFilter
            field="fields.tag.raw"
            fieldOptions={{ type: 'nested', options: { path: 'fields' } }}
            title="Categories"
            id="fields"
          />
          <RefinementListFilter
            id="references"
            title="References"
            field="references.value.raw"
            fieldOptions={{ type: 'nested', options: { path: 'references' } }}
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
          <MenuFilter
            field="funds.name.raw"
            fieldOptions={{ type: 'nested', options: { path: 'funds' } }}
            title="Фонды"
            id="funds"
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

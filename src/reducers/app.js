// @flow

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import type { $ExtractState } from './$ExtractState';

import time from './time';
import books, * as booksSelectors from './books';

const reducers = {
  router,
  time,
  books,
};

export type AppState = $ExtractState<typeof reducers>;
export default combineReducers(reducers);

export const getBooks = (state: AppState): string => booksSelectors.getBooks(state.books);

// @flow

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import type { $ExtractState } from './$ExtractState';

import time from './time';
import books, * as booksSelectors from './books';
import auth, * as authSelectors from './auth';

const reducers = {
  router,
  time,
  books,
  auth,
};

export type AppState = $ExtractState<typeof reducers>;
export default combineReducers(reducers);

export const getBooks = (state: AppState): string => booksSelectors.getBooks(state.books);
export const getAuthenticationStatus = (state: AppState) =>
  authSelectors.getAuthenticationStatus(state.auth);
export const getAuthenticationError = (state: AppState) =>
  authSelectors.getAuthenticationError(state.auth);

// @flow

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import type { $ExtractState } from './$ExtractState';

import time from './time';

const reducers = {
  router,
  time,
};

export type AppState = $ExtractState<typeof reducers>;
export default combineReducers(reducers);

// @flow
/* global Generator */

import { all } from 'redux-saga/effects';

import type Effect from 'redux-saga';

import TimerSagas from './timer';
import search from './search';

export default function* (): Generator<*, *, *> {
  const rootSagas: $ReadOnlyArray<Effect> = [
    TimerSagas(),
    search(),
  ];
  yield all(rootSagas);
}

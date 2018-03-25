// @flow
/* global Generator */

import { all } from 'redux-saga/effects';

import type Effect from 'redux-saga';

import TimerSagas from './timer';

export default function* (): Generator<*, *, *> {
  const rootSagas: $ReadOnlyArray<Effect> = [
    TimerSagas(),
  ];
  yield all(rootSagas);
}

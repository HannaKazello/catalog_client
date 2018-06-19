// @flow
/* global Generator */

import { all } from 'redux-saga/effects';

import type Effect from 'redux-saga';

import TimerSagas from './timer';
import search from './search';
import auth from './auth';
import registrate from './registrate';

export default function* (): Generator<*, *, *> {
  const rootSagas: $ReadOnlyArray<Effect> = [
    TimerSagas(),
    search(),
    auth(),
    registrate(),
  ];
  yield all(rootSagas);
}

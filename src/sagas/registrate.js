// @flow
/* global Generator */

import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { authenticationFailure } from '../actions/auth';
import { registrate } from '../requests/api';

const INTERVAL: number = 10000; // ten seconds

function* registration(action): Generator<*, *, *> {
  console.log(action.payload);
  const response = yield call(registrate, action.payload);
  const { success, message } = yield call([response, response.json]);

  if (!success) {
    yield put(authenticationFailure({ code: 400, message }));
    return;
  }

  yield put(push('/login'));
}

export default function* (): Generator<*, *, *> {
  yield takeEvery('REGISTRATE', registration);
}

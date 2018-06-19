// @flow
/* global Generator */

import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { authenticationFailure, authenticated } from '../actions/auth';
import { auth } from '../requests/api';
import { loadBuckets, loadRecords } from '../actions/search';

const INTERVAL: number = 10000; // ten seconds

function* authenticate(action): Generator<*, *, *> {
  const response = yield call(auth, action.payload);
  const { success, message, token } = yield call([response, response.json]);

  if (!success) {
    yield put(authenticationFailure({ code: 400, message }));
  }

  yield put(authenticated(token));
  yield put(push('/'));
}

export default function* (): Generator<*, *, *> {
  yield takeEvery('AUTHENTICATE', authenticate);
}

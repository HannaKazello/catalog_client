// @flow
/* global Generator */

import { takeEvery, call, put } from 'redux-saga/effects';
import { matchAll, searchByString, getBuckets } from '../requests/search';

const INTERVAL: number = 10000; // ten seconds

function* search(): Generator<*, *, *> {
  const result = yield call(matchAll, 1);
  console.log(result);
}

export default function* (): Generator<*, *, *> {
  // yield takeEvery('SEARCH', search);
  // const result = yield call(matchAll, 1);
  // const result = yield call(searchByString, 'красота', 1);
  const result = yield call(getBuckets);
  console.log(result.aggregations);
}

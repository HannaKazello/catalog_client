// @flow
/* global Generator */

import { takeEvery, call, put } from 'redux-saga/effects';
import { matchAll, searchByString, getBuckets } from '../requests/search';
import { loadBuckets, loadRecords } from '../actions/search';

const INTERVAL: number = 10000; // ten seconds

function* search(): Generator<*, *, *> {
  const result = yield call(matchAll, 1);
  // console.log(result);
}

export default function* (): Generator<*, *, *> {
  // yield takeEvery('SEARCH', search);
  const all = yield call(matchAll, 1);
  // const result = yield call(searchByString, 'красота', 1);
  // eslint-disable-next-line
  yield put(loadRecords(all.hits.hits.map(record => record._source)))
  const result = yield call(getBuckets);
  const keys = result.aggregations.fields.tag.buckets;
  const buckets = keys.map(key => ({
    key: key.key,
    values: key.value.buckets,
  }));
  yield put(loadBuckets(buckets));
}

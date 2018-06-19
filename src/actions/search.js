// @flow

type Buckets = Array<{ key: string, values: Array<Object> }>;
export type Action =
  | { type: 'SEARCH', payload: { searchString: string } }
  | { type: 'RECORDS_LOADED', payload: { books: Array<Object> }}
  | { type: 'LOAD_BUCKETS', payload: { keys: Buckets }}
  | { type: 'SELECT_FIELD_VALUE', payload: { value: string, key: string }}

export const search = (searchString: string): Action => ({
  type: 'SEARCH',
  payload: { searchString },
});

export const selectFieldValue = ({ value, key }): Action => ({
  type: 'SELECT_FIELD_VALUE',
  payload: { value, key },
});

export const loadRecords = (books: Array<Object>): Action => ({
  type: 'RECORDS_LOADED',
  payload: books,
});

export const loadBuckets = (buckets: Buckets): Action => ({
  type: 'LOAD_BUCKETS',
  payload: buckets,
});

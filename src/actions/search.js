// @flow

export type Action =
  | { type: 'SEARCH', payload: { searchString: string } }
  | { type: 'RECORDS_LOADED', payload: { books: Array<Object> }}

export const authenticate = (searchString: string): Action => ({
  type: 'SEARCH',
  payload: { searchString },
});

export const authenticationFailure = (books: Array<Object>): Action => ({
  type: 'RECORDS_LOADED',
  payload: books,
});

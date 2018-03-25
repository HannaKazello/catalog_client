// @flow

import type { Action } from '../actions';
import fakeStore from './fake-books.json';

type Book = {
  belmarcId: string,
  fields: Array<{ tag: string, value: string }>,
  funds: Array<{ name: string, count: number }>,
  references: Array<{ tag: string, value: string }>,
};

export type State = Array<Book>;
const initialState: State = fakeStore.books;

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'BOOKS_LOADED': {
      const newBooks = action.payload;
      return {
        ...state,
        ...newBooks,
      };
    }
    default:
      return state;
  }
};

export const getBooks = (state: State): string => state;

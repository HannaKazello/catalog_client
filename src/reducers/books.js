// @flow

import type { Action } from '../actions';
import fakeStore from './fake-books.json';

type Book = {
  belmarcId: string,
  fields: Array<{ tag: string, value: string }>,
  funds: Array<{ name: string, count: number }>,
  references: Array<{ tag: string, value: string }>,
};

export type State = {
  records: Array<Book>,
};

const initialState: State = {
  records: [],
  searchString: false,
  selectedValue: false,
  selectedRefetence: false,
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'RECORDS_LOADED': {
      const newBooks = action.payload;
      return {
        records: newBooks,
      };
    }

    case 'SELECT_FIELD_VALUE': {
      return {
        ...state,
        selectedValue: action.payload,
      };
    }

    case 'SEARCH': {
      return {
        ...state,
        searchString: action.payload.searchString,
      };
    }

    default:
      return state;
  }
};

export const getBooks = (state: State): string => state.records;
export const getSelectedValue = (state: State) => state.selectedValue;

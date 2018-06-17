// @flow

import type { Action } from '../actions';
import fakeStore from './fake-books.json';


type Buckets = Array<{ key: string, values: Array<Object> }>;
export type State = Buckets;
const initialState: State = {
  buckets: [],
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'LOAD_BUCKETS': {
      const newBuckets = action.payload;
      return {
        buckets: newBuckets,
      };
    }
    default:
      return state;
  }
};

export const getBuckets = (state: State): string => state.buckets;

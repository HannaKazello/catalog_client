// @flow

import type { Action } from '../actions';

export type State = {
  currentTime: string,
};
const initialState: State = {
  currentTime: new Date(),
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.payload.currentTime,
      };
    default:
      return state;
  }
};

export const getCurrentTime = (state: State): string => state.currentTime;

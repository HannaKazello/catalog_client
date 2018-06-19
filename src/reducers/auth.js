// @flow

import type { Action } from '../actions';

export type State = {
  authenticated: boolean,
  authenticating: boolean,
  error: boolean | { code: string, message: string },
  token: string,
};

const initialState: State = {
  authenticated: false,
  authenticating: false,
  error: false,
  token: '',
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'AUTHENTICATE': {
      return {
        authenticated: false,
        error: false,
        authenticating: true,
        token: '',
      };
    }

    case 'AUTHENTICATED': {
      return {
        error: false,
        authenticated: true,
        authenticating: false,
        token: action.payload.token,
      };
    }

    case 'AUTHENTICATION_FAULURE': {
      return {
        error: action.payload,
        authenticated: false,
        authenticating: false,
        token: '',
      };
    }

    default: {
      return state;
    }
  }
};

export const getAuthenticationStatus = (state: State) => state;
export const getAuthenticationError = (state: State) => state.error;

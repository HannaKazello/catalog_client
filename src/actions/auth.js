// @flow

export type Action =
  | { type: 'AUTHENTICATE', payload: { email: string, password: string } }
  | { type: 'REGISTRATE', payload: { email: string, password: string } }
  | { type: 'AUTHENTICATED' }
  | { type: 'AUTHENTICATION_FAULURE', payload: { code: string, message: string } }

export const authenticated = (token: string): Action => ({
  type: 'AUTHENTICATED',
  payload: { token },
});

export const authenticate = ({ email, password }: { email: string, password: string }): Action => ({
  type: 'AUTHENTICATE',
  payload: { email, password },
});

export const registrate = ({ email, password }: { email: string, password: string }): Action => ({
  type: 'REGISTRATE',
  payload: { email, password },
});

export const authenticationFailure = (error: { code: string, message: string }): Action => ({
  type: 'AUTHENTICATION_FAULURE',
  payload: error,
});

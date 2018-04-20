// @flow

export type Action =
  | { type: 'AUTHENTICATE', payload: { email: string, password: string } }
  | { type: 'AUTHENTICATED' }
  | { type: 'AUTHENTICATION_FAULURE', payload: { code: string, message: string } }
  | { type: 'SESSION_EXPIRED' }

export const authenticated = (): Action => ({
  type: 'AUTHENTICATED',
});

export const authenticate = ({ email, password }: { email: string, password: string }): Action => ({
  type: 'AUTHENTICATE',
  payload: { email, password },
});

export const authenticationFailure = (error: { code: string, message: string }): Action => ({
  type: 'AUTHENTICATION_FAULURE',
  payload: error,
});

export const sessionExpired = (): Action => ({
  type: 'SESSION_EXPIRED',
});

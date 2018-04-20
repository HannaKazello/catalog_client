// @flow

import type { Action as TimerAction } from './timer';
import type { Action as AuthAction } from './auth';

export type Action =
  | TimerAction
  | AuthAction

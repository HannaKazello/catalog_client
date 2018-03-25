// @flow

export type ChangeTime = { type: 'UPDATE_CURRENT_TIME', payload: { currentTime: string }};
// eslint-disable-next-line import/prefer-default-export
export const changeTime = (currentTime: string): ChangeTime => ({
  type: 'UPDATE_CURRENT_TIME',
  payload: { currentTime },
});

export type Action = ChangeTime;

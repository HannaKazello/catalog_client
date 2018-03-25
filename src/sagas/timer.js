// @flow
/* global Generator */

import { eventChannel } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import type { Channel } from 'redux-saga';
import { changeTime } from '../actions/timer';

const INTERVAL: number = 10000; // ten seconds
function timer(): Channel {
  return eventChannel((emit) => {
    const iv = setInterval(() => {
      const currentTime = new Date();
      emit(currentTime);
    }, INTERVAL);
    return () => {
      clearInterval(iv);
    };
  });
}

export default function* (): Generator<*, *, *> {
  const timerChannel: Channel = yield call(timer);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const currentTime: string = yield take(timerChannel);
    yield put(changeTime(currentTime));
  }
}

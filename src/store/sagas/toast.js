import { delay, put, takeLatest } from 'redux-saga/effects';
import {
  SHOW_TOAST,
  CLOSE_TOAST
} from '../actions/types';

export function* showToast() {
  yield delay(3000);

  yield put({
    type: CLOSE_TOAST
  });
}

export function* toast() {
  yield takeLatest(SHOW_TOAST, showToast);
}

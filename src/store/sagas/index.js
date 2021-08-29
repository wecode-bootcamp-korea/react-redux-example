import { all } from 'redux-saga/effects';
import { toast } from './toast';

function* rootSaga() {
  yield all([toast()]);
}

export default rootSaga;

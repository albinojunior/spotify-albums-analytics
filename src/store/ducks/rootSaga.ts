import { all } from 'redux-saga/effects';

import artistsSagas from './artists/sagas';
import albumsSaga from './albums/sagas';

export default function* rootSaga() {
  return yield all([...artistsSagas, ...albumsSaga]);
}

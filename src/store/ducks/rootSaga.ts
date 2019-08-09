import { all } from "redux-saga/effects";

import artistsSagas from "./artists/sagas";
import albumsSaga from "./albums/sagas";
import tracksSagas from "./tracks/sagas";

export default function* rootSaga() {
  return yield all([...artistsSagas, ...albumsSaga, ...tracksSagas]);
}

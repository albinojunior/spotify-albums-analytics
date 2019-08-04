import {
 call, put, takeLatest, takeEvery,
} from 'redux-saga/effects';
import { Artist } from '../artists/types';
import { AlbumsTypes as types } from './types';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load(action: any) {
  try {
    console.log(action.artists);
    // const response = yield call(api.get, `/artists/{albums?ids=`);

    // yield put(loadSuccess());
  } catch (err) {
    yield put(loadFailure());
  }
}

const albumsSagas = [takeEvery(types.LOAD_REQUEST, load)];

export default albumsSagas;

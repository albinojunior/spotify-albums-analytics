import { call, put, takeLatest } from 'redux-saga/effects';
import { ArtistsTypes as types, Artist, ARTISTS } from './types';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const ids = ARTISTS.map(artist => artist.id);
    const response = yield call(api.get, `/artists?ids=${ids.join('%2C')}`);
    yield put(loadSuccess(response.data.artists.map(({ name, id }: Artist) => ({ name, id }))));
  } catch (err) {
    console.log(err);
    yield put(loadFailure());
  }
}

const artistsSagas = [takeLatest(types.LOAD_REQUEST, load)];

export default artistsSagas;

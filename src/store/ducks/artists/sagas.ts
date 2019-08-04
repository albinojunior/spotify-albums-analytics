import { call, put, takeLatest } from 'redux-saga/effects';
import { ArtistsTypes as types } from './types';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export const artistIds: string[] = [
  "6AyvSIi2EyLOaMJCc6J5fZ",
  "4fdCGYM7dtJLa3LvR1ccto",
  "6iAY2AyUZLSX3PWLIAfFZY",
  "0Onvkz1Nbs4wHXXUwOIGk8",
  "1giin6byO7ehdqZBBmbI1N"
];

export function* load() {
  try {
    const response = yield call(api.get, `/artists?ids=${artistIds.join('%2C')}`);

    yield put(loadSuccess(response.data.artists));
  } catch (err) {
    yield put(loadFailure());
  }
}

const artistsSagas = [takeLatest(types.LOAD_REQUEST, load)];

export default artistsSagas;

import {
 call, put, takeLatest, all,
} from 'redux-saga/effects';
import { Album } from '../albums/types';
import { AlbumsTypes as types } from './types';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function buildAlbum({
  id,
  name,
  release_date,
  release_date_precision,
  total_tracks,
}: Album): Album {
  return {
    id,
    name,
    release_date,
    release_date_precision,
    total_tracks,
  };
}

export function* load(action: any) {
  try {
    const albums: any = {};
    const calls: any = {};
    for (const id of action.artists) {
      const url = `/artists/${id}/albums?limit=50&offset=0&include_groups=album`;
      calls[id] = call(api.get, url);
    }
    
    const results = yield all(calls);
    for (const id in results) {
      const {
        data: { items },
      } = results[id];
      albums[id] = items.map(buildAlbum);
    }

    yield put(loadSuccess(albums));
  } catch (err) {
    console.log(err);
    yield put(loadFailure());
  }
}

const albumsSagas = [takeLatest(types.LOAD_REQUEST, load)];

export default albumsSagas;

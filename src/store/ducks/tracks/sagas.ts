import {
 call, put, all, takeEvery, takeLatest,
} from 'redux-saga/effects';
import { TracksTypes as types, Track } from './types';
import api from '../../../services/api';

import {
 loadSuccess, loadFailure, loadTopTracksSuccess, loadTopTracksFailure,
} from './actions';
import { buildAlbum } from "../albums/sagas";

function buildTrack({
  name,
  disc_number,
  explicit,
  popularity,
  preview_url,
  track_number,
  album,
}: Track): Track {
  return {
    name,
    disc_number,
    explicit,
    popularity,
    preview_url,
    track_number,
    album: buildAlbum(album)
  };
}

export function* loadTopTracks(action: any) {
  try {
    let tracksList: any = [];
    const calls: any = [];
    for (const id of action.artists) {
      const url = `/artists/${id}/top-tracks?country=BR`;
      calls.push(call(api.get, url));
    }
    for (const result of yield all(calls)) {
      const {
        data: { tracks },
      } = result;
      tracksList = [...tracksList, ...tracks.map(buildTrack)];
    }
    yield put(loadTopTracksSuccess(tracksList));
  } catch (err) {
    console.log(err);
    yield put(loadTopTracksFailure());
  }
}

const tracksSagas = [takeLatest(types.LOAD_TOP_TRACKS_REQUEST, loadTopTracks)];

export default tracksSagas;

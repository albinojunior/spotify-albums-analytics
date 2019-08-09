import { call, put, takeLatest } from "redux-saga/effects";
import moment from "moment";
import _ from "lodash";
import { Album } from "../albums/types";
import { AlbumsTypes as types } from "./types";
import api from "../../../services/api";

import { loadSuccess, loadFailure, getSuccess, getFailure } from "./actions";

export function buildAlbum({
  id,
  name,
  release_date,
  total_tracks
}: Album): Album {
  const release_year = moment(release_date).format("YYYY");
  return {
    id,
    name,
    release_date,
    release_year,
    total_tracks
  };
}

export function* load(action: any) {
  try {
    const { artistId } = action;
    const url = `/artists/${artistId}/albums?limit=50&offset=0&include_groups=album&market=BR`;
    const {
      data: { items }
    } = yield call(api.get, url);
    const groupedAlbums = _.groupBy(items.map(buildAlbum), "release_year");
    yield put(loadSuccess(groupedAlbums));
  } catch (err) {
    console.log(err);
    yield put(loadFailure());
  }
}

export function* get(action: any) {
  try {
    const { albumId } = action;
    const url = `/albums/${albumId}`;
    const { data } = yield call(api.get, url);
    console.log(data);
    yield put(getSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(getFailure());
  }
}

const albumsSagas = [
  takeLatest(types.LOAD_REQUEST, load),
  takeLatest(types.GET_REQUEST, get)
];

export default albumsSagas;

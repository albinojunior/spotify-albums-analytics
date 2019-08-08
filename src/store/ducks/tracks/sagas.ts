import { call, put, all, takeLatest } from "redux-saga/effects";
import { Track } from "./types";
import api from "../../../services/api";

import { loadSuccess, loadFailure, loadTracks } from "./actions";
import { AlbumsTypes } from "../albums/types";

function buildTrack({
  id,
  name,
  disc_number,
  explicit,
  popularity,
  preview_url,
  track_number,
  album
}: Track): Track {
  return {
    id,
    name,
    disc_number,
    explicit,
    popularity,
    preview_url,
    track_number,
    album
  };
}

export function* load(action: any) {
  try {
    yield put(loadTracks());
    let tracksList: any = [];
    const idCalls: any = [];
    const calls: any = [];
    for (const { id } of action.albums) {
      const url = `/albums/${id}/tracks?limit=50`;
      idCalls.push(call(api.get, url));
    }

    for (const result of yield all(idCalls)) {
      const {
        data: { items }
      } = result;
      const ids = items.map((track: any) => track.id);
      const url = `/tracks?ids=${ids.join("%2C")}`;
      calls.push(call(api.get, url));
    }

    for (const result of yield all(calls)) {
      const {
        data: { tracks }
      } = result;
      tracksList = [...tracksList, ...tracks.map(buildTrack)];
    }

    yield put(loadSuccess(tracksList));
  } catch (err) {
    console.log(err);
    yield put(loadFailure());
  }
}

const tracksSagas = [takeLatest(AlbumsTypes.SELECT, load)];

export default tracksSagas;

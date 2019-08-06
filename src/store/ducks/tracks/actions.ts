import { TracksTypes as types, Track } from './types';

export const loadTopTracks = (artists: string[]) => ({
  type: types.LOAD_TOP_TRACKS_REQUEST,
  artists,
});
export const loadTopTracksSuccess = (data: Track[]) => ({
  type: types.LOAD_TOP_TRACKS_SUCCCESS,
  data,
});
export const loadTopTracksFailure = () => ({ type: types.LOAD_TOP_TRACKS_FAILURE });

export const loadTracks = (artistId: string) => ({ type: types.LOAD_FAILURE, artistId });
export const loadSuccess = (data: Track[]) => ({ type: types.LOAD_SUCCCESS, data });
export const loadFailure = () => ({ type: types.LOAD_FAILURE });

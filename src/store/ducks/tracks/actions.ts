import { TracksTypes as types, Track } from './types';

export const loadTracks = () => ({ type: types.LOAD_REQUEST });
export const loadSuccess = (data: Track[]) => ({ type: types.LOAD_SUCCCESS, data });
export const loadFailure = () => ({ type: types.LOAD_FAILURE });

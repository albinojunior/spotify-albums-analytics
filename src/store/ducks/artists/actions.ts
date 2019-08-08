import { ArtistsTypes as types, Artist } from './types';

export const loadArtists = () => ({ type: types.LOAD_REQUEST });

export const loadSuccess = (data: Artist[]) => ({ type: types.LOAD_SUCCCESS, data });

export const loadFailure = () => ({ type: types.LOAD_FAILURE });

export const selectArtist = (artistId: string) => ({ type: types.SELECT, artistId });

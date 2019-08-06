import { Artist } from '../artists/types';
import { AlbumsTypes as types, Album } from './types';

export const loadAlbums = (artists: string[]) => ({ type: types.LOAD_REQUEST, artists });

export const loadSuccess = (data: any) => ({ type: types.LOAD_SUCCCESS, data });

export const loadFailure = () => ({ type: types.LOAD_FAILURE });

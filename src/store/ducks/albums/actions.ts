import { AlbumsTypes as types, Album } from "./types";

export const loadAlbums = (artistId: string) => ({
  type: types.LOAD_REQUEST,
  artistId
});

export const loadSuccess = (data: any) => ({ type: types.LOAD_SUCCCESS, data });

export const loadFailure = () => ({ type: types.LOAD_FAILURE });

export const getAlbum = (albumId: string) => ({
  type: types.GET_REQUEST,
  albumId
});

export const getSuccess = (album: any) => ({ type: types.GET_SUCCCESS, album });

export const getFailure = () => ({ type: types.GET_FAILURE });

export const selectAlbums = (albums: Album[], year: string) => ({
  type: types.SELECT,
  albums,
  year
});

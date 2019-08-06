import { Artist } from '../artists/types';
/**
 * Action types
 */
export enum AlbumsTypes {
  LOAD_REQUEST = '@albums/LOAD_REQUEST',
  LOAD_SUCCCESS = '@albums/LOAD_SUCCCESS',
  LOAD_FAILURE = '@albums/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface Album {
  id: string;
  name: string;
  release_date?: string;
  release_date_precision?: string;
  total_tracks?: number;
}

/**
 * State type
 */
export interface AlbumsState {
  readonly data: Album[];
  readonly loading: boolean;
  readonly error: boolean;
}

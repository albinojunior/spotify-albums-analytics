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
  href: string;
  type: 'album';
  external_urls?: {
    spotify: string;
  };
  images?: { height: number; url: string; width: number }[];
  popularity?: number;
  uri?: string;
  album_group?: 'appears_on' | 'single';
  album_type?: string;
  artists?: Artist[];
  available_markets?: string[];
  release_date?: string;
  release_date_precision?: string;
  total_tracks?: number;
  copyrights?: { text: string; type: string }[];
  external_ids?: { upc: string };
}

/**
 * State type
 */
export interface AlbumsState {
  readonly data: Album[];
  readonly loading: boolean;
  readonly error: boolean;
}

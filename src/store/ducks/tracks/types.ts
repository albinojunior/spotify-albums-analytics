import { Album } from '../albums/types';
/**
 * Action types
 */
export enum TracksTypes {
  LOAD_REQUEST = '@tracks/LOAD_REQUEST',
  LOAD_SUCCCESS = '@tracks/LOAD_SUCCCESS',
  LOAD_FAILURE = '@tracks/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Track {
  id: string;
  name: string;
  disc_number: number;
  explicit: boolean;
  popularity: number;
  preview_url: string;
  track_number: number;
  album: Album;
}

/**
 * State type
 */
export interface TracksState {
  readonly data: Track[];
  readonly loading: boolean;
  readonly error: boolean;
}

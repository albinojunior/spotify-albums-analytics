import { Album } from '../albums/types';
/**
 * Action types
 */
export enum TracksTypes {
  LOAD_REQUEST = '@tracks/LOAD_REQUEST',
  LOAD_SUCCCESS = '@tracks/LOAD_SUCCCESS',
  LOAD_FAILURE = '@tracks/LOAD_FAILURE',
  LOAD_TOP_TRACKS_REQUEST = '@tracks/LOAD_TOP_TRACKS_REQUEST',
  LOAD_TOP_TRACKS_SUCCCESS = '@tracks/LOAD_TOP_TRACKS_SUCCCESS',
  LOAD_TOP_TRACKS_FAILURE = '@tracks/LOAD_TOP_TRACKS_FAILURE',
}

/**
 * Data types
 */
export interface Track {
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
  readonly toptracks: Track[];
  readonly loading: boolean;
  readonly error: boolean;
}

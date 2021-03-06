/**
 * Action types
 */
export enum AlbumsTypes {
  LOAD_REQUEST = "@albums/LOAD_REQUEST",
  LOAD_SUCCCESS = "@albums/LOAD_SUCCCESS",
  LOAD_FAILURE = "@albums/LOAD_FAILURE",
  SELECT = "@albums/SELECT",
  GET_REQUEST = "@albums/GET_REQUEST",
  GET_SUCCCESS = "@albums/GET_SUCCCESS",
  GET_FAILURE = "@albums/GET_FAILURE",
}

/**
 * Data types
 */
export interface Album {
  id: string;
  name: string;
  release_date?: string;
  release_year?: string;
  total_tracks?: number;
  popularity?: number;
}

/**
 * State type
 */
export interface AlbumsState {
  readonly data: any;
  readonly loading: boolean;
  readonly error: boolean;
  readonly selecteds: Album[];
  readonly year?: string;
  readonly album?: Album;
}

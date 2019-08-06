/**
 * Action types
 */
export enum ArtistsTypes {
  LOAD_REQUEST = '@artists/LOAD_REQUEST',
  LOAD_SUCCCESS = '@artists/LOAD_SUCCCESS',
  LOAD_FAILURE = '@artists/LOAD_FAILURE',
  SELECT = '@artists/SELECT',
}

/**
 * Data types
 */
export interface Artist {
  id: string;
  name: string;
}

/**
 * State type
 */
export interface ArtistsState {
  readonly data: Artist[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly selected: Artist | null;
}

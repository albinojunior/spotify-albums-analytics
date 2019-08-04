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
  href: string;
  type: 'artist';
  external_urls?: {
    spotify: string;
  };
  followers?: {
    href: string;
    total: number;
  };
  genres?: string[];
  images?: { height: number; url: string; width: number }[];
  popularity?: number;
  uri?: string;
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

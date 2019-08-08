/**
 * Action types
 */
export enum ArtistsTypes {
  LOAD_REQUEST = '@artists/LOAD_REQUEST',
  LOAD_SUCCCESS = '@artists/LOAD_SUCCCESS',
  LOAD_FAILURE = '@artists/LOAD_FAILURE',
  SELECT = '@artists/SELECT',
}

export const ARTISTS: { color: string; id: string }[] = [
  { id: '6AyvSIi2EyLOaMJCc6J5fZ', color: '#F7CD8E' },
  { id: '6iAY2AyUZLSX3PWLIAfFZY', color: '#97E3D5' },
  { id: '5K854sjdzabwOy9KltU3Po', color: '#F47560' },
  { id: '0Onvkz1Nbs4wHXXUwOIGk8', color: '#5d5bf1' },
  { id: '1giin6byO7ehdqZBBmbI1N', color: '#38BCB2' },
];

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
  readonly selected?: string;
}

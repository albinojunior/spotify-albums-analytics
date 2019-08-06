import { Reducer } from 'redux';
import { TracksState, TracksTypes as types } from './types';

const INITIAL_STATE: TracksState = {
  data: [],
  toptracks: [],
  error: false,
  loading: false,
};

const reducer: Reducer<TracksState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOAD_REQUEST:
      return { ...state, loading: true, error: false };
    case types.LOAD_SUCCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case types.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case types.LOAD_TOP_TRACKS_REQUEST:
      return { ...state, loading: true, error: false };
    case types.LOAD_TOP_TRACKS_SUCCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        toptracks: action.data,
      };
    case types.LOAD_TOP_TRACKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        toptracks: [],
      };
    default:
      return state;
  }
};

export default reducer;

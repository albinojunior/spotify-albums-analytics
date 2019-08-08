import { Reducer } from 'redux';
import { ArtistsState, ArtistsTypes as types } from './types';

const INITIAL_STATE: ArtistsState = {
  data: [],
  error: false,
  loading: false
};

const reducer: Reducer<ArtistsState> = (state = INITIAL_STATE, action) => {
  if (process.env.NODE_ENV === 'development') console.log(action);
  switch (action.type) {
    case types.LOAD_REQUEST:
      return { ...state, loading: true };
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
    case types.SELECT:
      return {
        ...state,
        selected: action.artistId,
      };
    default:
      return state;
  }
};

export default reducer;

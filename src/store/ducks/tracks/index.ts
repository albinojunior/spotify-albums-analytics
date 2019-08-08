import { Reducer } from 'redux';
import { TracksState, TracksTypes as types } from './types';

const INITIAL_STATE: TracksState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<TracksState> = (state = INITIAL_STATE, action) => {
  if (process.env.NODE_ENV === 'development') console.log(action);
  switch (action.type) {
    case types.LOAD_REQUEST:
      return { ...state, loading: true, error: false, data: [] };
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
    default:
      return state;
  }
};

export default reducer;

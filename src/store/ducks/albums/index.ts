import { Reducer } from 'redux';
import { AlbumsState, AlbumsTypes as types } from './types';

const INITIAL_STATE: AlbumsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<AlbumsState> = (state = INITIAL_STATE, action) => {
  console.log(action);
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
    default:
      return state;
  }
};

export default reducer;

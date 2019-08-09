import { Reducer } from "redux";
import { AlbumsState, AlbumsTypes as types } from "./types";

const INITIAL_STATE: AlbumsState = {
  data: null,
  error: false,
  loading: false,
  selecteds: []
};

const reducer: Reducer<AlbumsState> = (
  state: AlbumsState = INITIAL_STATE,
  action: any
) => {
  if (process.env.NODE_ENV === "development") console.log(action);
  switch (action.type) {
    case types.LOAD_REQUEST:
      return { ...state, loading: true };
    case types.LOAD_SUCCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data
      };
    case types.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };
    case types.GET_REQUEST:
      return { ...state, loading: true, album: undefined };
    case types.GET_SUCCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        album: action.album
      };
    case types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        album: undefined
      };
    case types.SELECT:
      return {
        ...state,
        selected: action.album,
        year: action.year
      };
    default:
      return state;
  }
};

export default reducer;

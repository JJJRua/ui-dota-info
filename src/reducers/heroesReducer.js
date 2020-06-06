import {
  GET_HEROES_LIST,
  GET_HEROES_ERROR,
  GET_HEROES_SUCCESS
} from "../types";
const initialState = {
  heroes: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HEROES_LIST:
      return { ...state, loading: action.payload };
    case GET_HEROES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GET_HEROES_SUCCESS:
      return { ...state, loading: false, error: false, heroes: action.payload };
    
    default:
      return state;
  }
}

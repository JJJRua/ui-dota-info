import {
  GET_TEAMS_LIST,
  GET_TEAMS_LIST_ERROR,
  GET_TEAMS_LIST_SUCCESS,
} from "../types";

const initialState = {
  teams: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS_LIST:
      return { ...state, loading: action.payload };
    case GET_TEAMS_LIST_SUCCESS:
      return { ...state, teams: action.payload, loading: false, error: false };
    case GET_TEAMS_LIST_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

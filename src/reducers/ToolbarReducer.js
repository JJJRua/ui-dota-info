import {
  OPEN_DRAWER_OPTIONS,
  CLOSE_DRAWER_OPTIONS,
  SET_TOOLBAR_TITLE,
} from "../types";

const initialState = {
  open: false,
  title: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_DRAWER_OPTIONS:
    case CLOSE_DRAWER_OPTIONS:
      return { ...state, open: action.payload };
    case SET_TOOLBAR_TITLE :
      return {...state,title:action.payload}
    default:
      return state;
  }
}

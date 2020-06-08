import { OPEN_DRAWER_OPTIONS, CLOSE_DRAWER_OPTIONS, SET_TOOLBAR_TITLE } from '../types';

export function openDrawerOptAction() {
  return async (dispatch) => {
    dispatch(openDrawer());
  };
}

export function closeDrawerOptAction() {
  return async (dispatch) => {
    dispatch(closeDrawer());
  };
}

export function setToolbarTitleAction(title) {
  return async (dispatch)=>{
    dispatch(setTitle(title));
  };
}

const openDrawer = () => ({
  type: OPEN_DRAWER_OPTIONS,
  payload: true
});

const closeDrawer = () => ({
  type: CLOSE_DRAWER_OPTIONS,
  payload: false
});
const setTitle = (title) => ({
  type: SET_TOOLBAR_TITLE,
  payload: title
});

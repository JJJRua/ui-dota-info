import {
  GET_HEROES_LIST,
  GET_HEROES_ERROR,
  GET_HEROES_SUCCESS,
} from "../types";

import axiosClient from "../configs/axiosConnection";

export function getHeroesAction() {
  return async (dispatch) => {
    dispatch(getHeroes());
    try {
        const resp = await axiosClient.get("/heroes");
        // setTimeout(() => {
            dispatch(getHeroesSuccess(resp.data));
        // }, 3000);
    
    } catch (error) {
      dispatch(getHeroesError());
    }
  };
}

const getHeroes = () => ({
  type: GET_HEROES_LIST,
  payload: true,
});

const getHeroesSuccess = (heroes) => ({
  type: GET_HEROES_SUCCESS,
  payload: heroes,
});
const getHeroesError = () => ({
  type: GET_HEROES_ERROR,
  payload: true,
});

import {
  GET_TEAMS_LIST,
  GET_TEAMS_LIST_ERROR,
  GET_TEAMS_LIST_SUCCESS,
} from "../types";
import axiosClient from "../configs/axiosConnection";

export function getTeamListAction() {
    return async (dispatch)=>{
        dispatch(getTeams());
        try {
            const resp = await axiosClient.get('/teams')
            dispatch(getTeamsSuccess(resp.data));
        } catch (error) {
            dispatch(getTeamsError());
        }

    }
}

const getTeams = () => ({
    type: GET_TEAMS_LIST,
    payload:true
});

const getTeamsSuccess = (teams) => ({
    type: GET_TEAMS_LIST_SUCCESS,
    payload: teams
});


const getTeamsError = () => ({
    type: GET_TEAMS_LIST_ERROR,
    payload:false
});

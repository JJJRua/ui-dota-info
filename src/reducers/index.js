import { combineReducers } from 'redux';

import heroesReducer from './heroesReducer';
import teamsReducer from './teamsReducer';


export default combineReducers({
    heroes : heroesReducer,
    teams : teamsReducer
})
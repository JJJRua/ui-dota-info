import { combineReducers } from 'redux';

import heroesReducer from './heroesReducer';
import teamsReducer from './teamsReducer';
import toolbarReducer from './ToolbarReducer'; 

export default combineReducers({
  heroes : heroesReducer,
  teams : teamsReducer,
  toolbar : toolbarReducer
});

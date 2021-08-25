import { combineReducers } from 'redux';
import auth from './auth';
import modals from './modals';

const rootReducer = combineReducers({
  auth,
  modals
});

export default rootReducer;

import { combineReducers } from 'redux';
import auth from './auth';
import modals from './modals';
import toast from './toast';

const rootReducer = combineReducers({
  auth,
  modals,
  toast
});

export default rootReducer;

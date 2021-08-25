import {
  AUTH_USER,
  UNAUTH_USER
} from '../actions/types';

export default function auth(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return {
        ...state,
        auth: true
      };
    case UNAUTH_USER:
      return {
        ...state,
        auth: false
      };
    default:
      return state;
  }
}

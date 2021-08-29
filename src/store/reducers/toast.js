import {
  SHOW_TOAST,
  CLOSE_TOAST
} from '../actions/types';

const INITIAL_STATE = {
  showToast: false
};

export default function toast(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        showToast: true,
        option: action.option
      };
    case CLOSE_TOAST:
      return {
        ...state,
        showToast: false
      };
    default:
      return state;
  }
}

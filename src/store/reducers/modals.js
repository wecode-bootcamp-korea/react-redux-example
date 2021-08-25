import {
  SHOW_MODAL,
  CLOSE_MODAL
} from '../actions/types';

const INITIAL_STATE = {
  showModal: false
};

export default function modals(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        title: action.title
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };
    default:
      return state;
  }
}

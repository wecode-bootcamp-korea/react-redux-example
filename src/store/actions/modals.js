import {
  SHOW_MODAL,
  CLOSE_MODAL
} from './types';

export const showModal = (title) => {
  return {
    type: SHOW_MODAL,
    title
  }
};

export const closeModal = () => {
  return { type: CLOSE_MODAL }
};

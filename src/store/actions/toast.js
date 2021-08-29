import {
  SHOW_TOAST,
  CLOSE_TOAST
} from './types';

export const showToast = (option) => {
  return {
    type: SHOW_TOAST,
    option
  }
};

export const closeToast = () => {
  return { type: CLOSE_TOAST }
};

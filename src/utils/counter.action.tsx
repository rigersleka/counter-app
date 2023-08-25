import * as actionTypes from './types';

export const increment = () => ({
    type: actionTypes.INC,
  });
  
  export const decrement = () => ({
    type: actionTypes.DEC,
  });
  
  export const reset = () => ({
    type: actionTypes.RESET,
  });
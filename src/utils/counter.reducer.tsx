import * as actionTypes from "./types";

export const initialCounterState = {
  count: 0,
};

const counterReducer = (state = initialCounterState, action: any) => {
  switch (action.type) {
    case actionTypes.DEC:
      return { ...state, count: state.count + 1 };
    case actionTypes.INC:
      return { ...state, count: state.count - 1 };
    case actionTypes.RESET:
      return { ...state, count: 0 };
    //Always return the initial state
    default:
      return state;
  }
};

export default counterReducer;

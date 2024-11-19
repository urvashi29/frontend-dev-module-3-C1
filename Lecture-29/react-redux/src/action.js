import * as actions from "./actionTypes";

export const onInc = (val) => {
  return { type: INC, payload: val };
};

export const onDec = (val) => {
  return {
    type: actions.DEC,
    payload: val,
  };
};


import * as actions from "./actionTypes";

//central storage (state)/redux state, redux store/application state
export const initState = {
  counter: 0,
  user: [],
};

//reducer js function
const reducer = (state = initState, action) => {
  // manipulations/calculations
  console.log(action);

  switch (action.type) {
    case actions.INC:
      return { ...state, counter: state.counter + action.payload };
    case actions.DEC:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

export default reducer;

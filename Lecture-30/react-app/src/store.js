//import reducer
// import reducer from "./reducer";
// import { applyMiddleware, createStore } from "redux";
// import { thunk } from "redux-thunk";

// export const store = createStore(reducer, applyMiddleware(thunk));

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { userSlice } from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
//   reducer : {
// reducerPath: slice.reducer
//   }

  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    counter: counterReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userSlice.middleware)
});

setupListeners(store.dispatch);

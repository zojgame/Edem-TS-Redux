import { combineReducers } from "@reduxjs/toolkit";
import { tripsReducer } from ".";

const rootReducer = combineReducers({
  tripsReducer: tripsReducer.reducer,
});

export { rootReducer };

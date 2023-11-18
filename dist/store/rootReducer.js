import { combineReducers } from "@reduxjs/toolkit";
import { tripsReducer } from ".";
var rootReducer = combineReducers({
    tripsReducer: tripsReducer.reducer,
});
export { rootReducer };

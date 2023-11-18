var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    trips: [],
};
var tripsReducer = createSlice({
    name: "tripReducer",
    initialState: initialState,
    reducers: {
        setTrips: function (state, action) {
            state.trips = action.payload;
        },
        addTrips: function (state, action) {
            state.trips = __spreadArray(__spreadArray([], state.trips, true), action.payload, true);
        },
    },
});
export var actions = tripsReducer.actions, reducer = tripsReducer.reducer;
export var setTrips = (_a = tripsReducer.actions, _a.setTrips), addTrips = _a.addTrips;
export { tripsReducer };

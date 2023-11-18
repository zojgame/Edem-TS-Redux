import { createSlice } from "@reduxjs/toolkit";
import { Trips } from "../types";

interface AppState {
  trips: Trips;
}

const initialState: AppState = {
  trips: [],
};

const tripsReducer = createSlice({
  name: "tripReducer",
  initialState,
  reducers: {
    setTrips: (state, action) => {
      state.trips = action.payload;
    },
    addTrips: (state, action) => {
      state.trips = [...state.trips, ...action.payload];
    },
  },
});

export const { actions, reducer } = tripsReducer;
export const { setTrips, addTrips } = tripsReducer.actions;
export { tripsReducer };

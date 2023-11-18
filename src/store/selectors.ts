import { Trips, State } from "../types";

const getTrips = (state: State): Trips => state["tripsReducer"].trips;

export { getTrips };

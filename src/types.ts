import { store } from "./store";

type Trip = {
  id: number;
  title: string;
  price: number;
  location: string;
  cargoType: string[];
  image: string;
  date: string;
};

type Trips = Trip[];

type State = ReturnType<typeof store.getState>;

type ApiDispatch = typeof store.dispatch;

type Toast = {
  id: string;
  message: string;
  type: string;
};

export type { Trip, Trips, State, ApiDispatch, Toast };

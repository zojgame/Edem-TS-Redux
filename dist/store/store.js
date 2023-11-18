import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '.';
export var store = configureStore({
    reducer: rootReducer,
    devTools: true
});

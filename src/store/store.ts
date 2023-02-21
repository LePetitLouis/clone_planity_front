import {
    combineReducers,
    configureStore,
    Middleware,
    PreloadedState,
  } from '@reduxjs/toolkit';

import { searchReducer } from "./slice/searchSlice";
import { bookingReducer } from "./slice/bookingSlice";
import { authReducer } from "./slice/authSlice";

const rootReducer = combineReducers({
    search: searchReducer,
    booking: bookingReducer,
    auth: authReducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
      reducer: rootReducer,
      preloadedState,
    });
}

//MIDDLEWARE
const localStorageMiddleware: Middleware = ({ getState }) => {
    return (next) => (action) => {
      const result = next(action);
      localStorage.setItem('agendlySettings', JSON.stringify(getState()));
      return result;
    };
};

// Rehydration function
const reHydrateStore = () => {
    if (localStorage.getItem('agendlySettings') !== null) {
      return JSON.parse(localStorage.getItem('agendlySettings')!); // re-hydrate the store
    }
};

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: reHydrateStore(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
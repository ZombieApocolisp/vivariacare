import { configureStore } from "@reduxjs/toolkit";
import terrariumReducer from "./terrariumSlice";

export const store = configureStore({
  reducer: {
    terrarium: terrariumReducer,
  },
});

// These types power TypeScript-safe selectors and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

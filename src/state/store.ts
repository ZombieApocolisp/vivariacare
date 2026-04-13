import terrariumReducer from "@features/terrarium/terrariumSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    terrarium: terrariumReducer,
  },
});

// These types power TypeScript-safe selectors and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

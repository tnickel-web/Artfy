// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // Deine Reducer hier
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

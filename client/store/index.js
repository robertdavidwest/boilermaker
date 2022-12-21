import { configureStore } from "@reduxjs/toolkit";
import dummyReducer from "../features/dummySlice";

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { dummySlice } from "../features/dummySlice";

const store = configureStore({
  reducer: {
    dummy: dummySlice,
  },
});

export default store;

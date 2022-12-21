import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

function dummyReducer(state = {}, action) {
  return state;
}

const dummySlice = createSlice({
  name: "dummy",
  initialState: {},
  reducers: { dummyReducer },
});

export default dummySlice.reducer;

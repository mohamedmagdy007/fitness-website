import { createSlice } from "@reduxjs/toolkit";
import { getexercise } from "../Actions/Actions";
const exerciseSlice = createSlice({
  name: "exercise",
  initialState: {
    exercises: [],
    isLoading: false,
    error: null,
    // bookInfo: null,
  },
  extraReducers: {
    [getexercise.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getexercise.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getexercise.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default exerciseSlice.reducer;

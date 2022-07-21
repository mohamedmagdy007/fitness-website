import { createSlice } from '@reduxjs/toolkit';
import { getAllExercises } from '../Actions/Actions';
const AllExerciseSlice = createSlice({
  name: 'ALLExercises',
  initialState: {
    AllExercises: [],
    isLoading: false,
    error: null,
    // bookInfo: null,
  },
  extraReducers: {
    [getAllExercises.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllExercises.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.AllExercises = action.payload;
    },
    [getAllExercises.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default AllExerciseSlice.reducer;

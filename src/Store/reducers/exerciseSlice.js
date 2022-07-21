import { createSlice } from '@reduxjs/toolkit';
import { getexercise, getAllExercises } from '../Actions/Actions';
const exerciseSlice = createSlice({
  name: 'exercise',
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
      state.exercises = ['All', ...action.payload];
    },
    [getexercise.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  [getAllExercises.pending]: (state, action) => {
    state.isLoading = true;
    state.error = null;
  },
  [getAllExercises.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.exercises = action.payload;
  },
  [getAllExercises.rejected]: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});
export default exerciseSlice.reducer;

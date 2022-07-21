import { configureStore } from '@reduxjs/toolkit';
import exercises from './reducers/exerciseSlice';
import AllExercises from './reducers/getAllExerciseSlice';
export default configureStore({
  reducer: {
    exercises,
    AllExercises,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import exerciseSlice from "./reducers/exerciseSlice";
export default configureStore({
  reducer: {
    exerciseSlice,
  },
});

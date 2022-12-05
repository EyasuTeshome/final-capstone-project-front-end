import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice';
import carSlice from "./carSlice";

const store = configureStore({
  reducer: {
    user: loginSlice.reducer,
    cars: carSlice.reducer,
  },

});

export default store;

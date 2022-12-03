import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice';
import registerSlice from './registerSlice';
import carSlice from "./carSlice";

const store = configureStore({
  reducer: {
    user: loginSlice.reducer,
    register: registerSlice.reducer,
    cars: carSlice.reducer,
  },

});

export default store;

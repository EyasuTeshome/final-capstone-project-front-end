import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice';
import registerSlice from './registerSlice';

const store = configureStore({
  reducer: {
    user: loginSlice.reducer,
    register: registerSlice.reducer,
  },

});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice';

const store = configureStore({
  reducer: { user: loginSlice.reducer },
});

export default store;

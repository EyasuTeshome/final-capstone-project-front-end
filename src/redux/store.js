import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import carSlice from './carSlice';
import reservationSlice from './reservationSlice';

const store = configureStore({
  reducer: {
    user: loginSlice.reducer,
    cars: carSlice.reducer,
    reservations: reservationSlice.reducer,
  },
});

export default store;

/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_URL } from './utils';

export const fetchReservations = createAsyncThunk(
  '/fetchReservations',
  async (arg, { getState }) => {
    const { data } = getState().user;
    const headers = { Authorization: `${data.auth}` };

    const res = await axios.get(`${API_URL}/reservations`, {
      headers,
    });
    console.log(res, 'res');
    return res.data;
  },
);

const initialState = {
  reservations: [],
  error: null,
  status: 'idle',
};

const reservationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { getCarDetails } = reservationSlice.actions;
export const getStatus = (state) => state.reservations.status;
export const getError = (state) => state.reservations.error;
export const getAllReservations = (state) => state.reservations.reservations;

export default reservationSlice;

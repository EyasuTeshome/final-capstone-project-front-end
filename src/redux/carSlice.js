/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_URL } from './utils';

const data = JSON.parse(localStorage.getItem('user'));

export const fetchCars = createAsyncThunk('users/fetchCars', async () => {
  const headers = { Authorization: `${data.auth}` };

  const res = await axios.get(`${API_URL}/cars`, {
    headers,
  });
  return res.data;
});

const initialState = {
  cars: [],
  error: null,
  status: 'idle',
  details: null,
};

const carSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getCarDetails: (state, action) => {
      const car = state.cars.filter((car) => car.id === action.payload);
      state.details = car;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { getCarDetails } = carSlice.actions;
export const getCarsStatus = (state) => state.cars.status;
export const getCarsError = (state) => state.cars.error;
export const getAllCars = (state) => state.cars.cars;
export const getDetailsView = (state) => state.cars.details;

export default carSlice;

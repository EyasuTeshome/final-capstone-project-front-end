/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from './utils';

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async ({ name, email, password }) => {
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          name,
          email,
          password,
        },
      }),
    });
    return res.status;
  },
);

const initialState = {
  data: null,
  error: null,
  status: 'idle',
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const registerUserStatus = (state) => state.register.status;
export const registerUserError = (state) => state.register.error;
export const getRegistrationStatus = (state) => state.register.data;

export default registerSlice;

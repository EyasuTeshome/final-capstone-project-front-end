/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "./utils";

const data = JSON.parse(localStorage.getItem("user"));

export const logInUser = createAsyncThunk(
  "users/logInUser",
  async ({ email, password }) => {
    const res = await fetch(`${API_URL}/users/sign_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });
    const auth = await res.headers.get("Authorization");
    const { user } = await res.json();
    if (res.status === 200) {
      localStorage.setItem("user", JSON.stringify({ ...user, auth }));
      return { ...user, auth };
    }
    return res;
  },
);

const initialState = {
  data,
  error: null,
  status: "idle",
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.status = "failed";
        if (action.error.message.includes("Invalid Em")) {
          state.error = "Invalid Email or Password";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export const logInUserStatus = (state) => state.user.status;
export const logInUserError = (state) => state.user.error;

export default loginSlice;

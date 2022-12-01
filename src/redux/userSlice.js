import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("users/logInUser/fulfilled", (state, action) => {
      /* eslint-disable no-param-reassign */
      state.data = action.payload;
    });
  },
});

export const logInUser = createAsyncThunk(
  "users/logInUser",
  async ({ name, email, password }) => {
    const response = await fetch("http://localhost:3000/users/sign_in", {
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
    const auth = await response.headers.get("Authorization");
    return { name, email, auth };
  },
);

export default userSlice;

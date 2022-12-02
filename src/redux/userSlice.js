import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const data = JSON.parse(localStorage.getItem("user"));

const userSlice = createSlice({
  name: "user",
  initialState: { data },
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
  async ({ email, password }) => {
    const res = await fetch("http://localhost:3000/users/sign_in", {
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
    return null;
  },
);

export default userSlice;

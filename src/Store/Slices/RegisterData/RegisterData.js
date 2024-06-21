import { createSlice } from "@reduxjs/toolkit";
import { fetchPostRegisterInfo } from "./API";

const RegisterDataSlice = createSlice({
  name: "RegisterData",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostRegisterInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostRegisterInfo.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.data.push(payload);
      })
      .addCase(fetchPostRegisterInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectRegisterData = (state) => state.RegisterData;
export const RegisterDataReducer = RegisterDataSlice.reducer;

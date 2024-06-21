import { createSlice } from "@reduxjs/toolkit";
import { fetchGetMovies } from "./API";

const mainMoviesData = createSlice({
  name: "mainMoviesData",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMovies.pending, (state, { payload }) => {})
      .addCase(fetchGetMovies.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.data = payload;
      })
      .addCase(fetchGetMovies.rejected, (state, { payload }) => {});
  },
});

export const selectMainMoviesData = (state) => state.mainMoviesData;
export const mainMoviesDataReducer = mainMoviesData.reducer;

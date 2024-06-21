import { createSlice } from "@reduxjs/toolkit";
import { fetchSemilarMovies } from "./API";

const SemilarMoviesSlice = createSlice({
  name: "SemilarMovies",
  initialState: {
    dataS: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSemilarMovies.pending, (state, { payload }) => {})
      .addCase(fetchSemilarMovies.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataS = payload;
      })
      .addCase(fetchSemilarMovies.rejected, (state, { payload }) => {});
  },
});

export const selectSemilarMovies = (state) => state.SemilarMovies;
export const SemilarMoviesReducer = SemilarMoviesSlice.reducer;

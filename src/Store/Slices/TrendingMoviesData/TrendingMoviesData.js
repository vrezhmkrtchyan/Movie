import { createSlice } from "@reduxjs/toolkit";
import { fetchGetNowPlayingMovies, fetchGetPopularMovies, fetchGetTrendingMovies } from "./API";


const TredingMoviesData = createSlice({
  name: "TredingMoviesData",
  initialState: {
    isLoading: false,
    data: [],
    dataN: [],
    dataP: []
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetTrendingMovies.pending, (state, { payload }) => {})
      .addCase(fetchGetTrendingMovies.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.data = payload;
      })
      .addCase(fetchGetTrendingMovies.rejected, (state, { payload }) => {})
      .addCase(fetchGetNowPlayingMovies.pending, (state, { payload }) => {})
      .addCase(fetchGetNowPlayingMovies.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataN = payload;
      })
      .addCase(fetchGetNowPlayingMovies.rejected, (state, { payload }) => {})
      .addCase(fetchGetPopularMovies.pending, (state, { payload }) => {})
      .addCase(fetchGetPopularMovies.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataP = payload;
      })
      .addCase(fetchGetPopularMovies.rejected, (state, { payload }) => {});
  },
});


export const selectTredingMoviesData = (state) => state.TredingMoviesData;
export const TredingMoviesDataReducer = TredingMoviesData.reducer
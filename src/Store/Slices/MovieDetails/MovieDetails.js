import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetails, fetchMovieDetailsVideo } from "./API";

const MovieDetailsSlice = createSlice({
  name: "MovieDetails",
  initialState: {
    data: {},
    videoData: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {})
      .addCase(fetchMovieDetails.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.data = payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, { payload }) => {})
      .addCase(fetchMovieDetailsVideo.pending, (state) => {})
      .addCase(fetchMovieDetailsVideo.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.videoData = payload;
      })
      .addCase(fetchMovieDetailsVideo.rejected, (state, { paylaod }) => {});
  },
});

export const selectMoveDetails = (state) => state.MovieDetails;
export const MovieDetailsReducer = MovieDetailsSlice.reducer;

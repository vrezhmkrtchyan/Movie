import { createSlice } from "@reduxjs/toolkit";
import { fetchGetMoviesDataWithVideos } from "./API";

const MoviesDataWithVideosSlice = createSlice({
  name: "MoviesDataWithVideos",
  initialState: {
    isLoading: false,
    data: []
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchGetMoviesDataWithVideos.pending, (state, {payload}) => {

    })
    .addCase(fetchGetMoviesDataWithVideos.fulfilled, (state, {payload}) => {
       state.isLoading = true;
      state.data = payload;
    })
    .addCase(fetchGetMoviesDataWithVideos.rejected, (state, {payload}) => {

    })
  }
});

export const selectMoviesDataWithVideos = (state) => state.MoviesDataWithVideos;
export const MoviesDataWithVideosReducer = MoviesDataWithVideosSlice.reducer
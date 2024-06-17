import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetails, fetchMovieDetailsVideo } from "./API";

const MovieDetailsSlice = createSlice({
  name: "MovieDetails",
  initialState: {
    data: {},
    videoData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
       
      })
      .addCase(fetchMovieDetails.fulfilled, (state, { payload }) => {
        
        state.data = payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, {payload}) => {
        

      })
      .addCase(fetchMovieDetailsVideo.pending, (state) => {
       
      })
      .addCase(fetchMovieDetailsVideo.fulfilled, (state, { payload }) => {
      
        state.videoData = payload;
      })
      .addCase(fetchMovieDetailsVideo.rejected, (state, {paylaod}) => {
       
      });
  },
});

export const selectMoveDetails = (state) => state.MovieDetails;
export const MovieDetailsReducer = MovieDetailsSlice.reducer;

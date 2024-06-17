import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovieDetails = createAsyncThunk("MovieDetails/fetchMovieDetails", async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json()
    return result
});


export const fetchMovieDetailsVideo = createAsyncThunk(
  "MovieDetails/fetchMovieDetailsVideo",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json();
    return result.results;
  }
);
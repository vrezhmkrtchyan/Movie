import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetTrendingMovies = createAsyncThunk(
  "TrendingMoviesData/fetchGetTrendingMovies",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=2&api_key=399f28f3d416e9d7984c2adb3a440d40"
    );
    const result = await response.json();
    return result.results;
  }
);

export const fetchGetNowPlayingMovies = createAsyncThunk(
  "TrendingMoviesData/fetchGetNowPlayingMovies",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2&api_key=399f28f3d416e9d7984c2adb3a440d40"
    );
    const result = await response.json();
    return result.results;
  }
);

export const fetchGetPopularMovies = createAsyncThunk(
  "TrendingMoviesData/fetchGetPopularMovies",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=3&api_key=399f28f3d416e9d7984c2adb3a440d40"
    );
    const result = await response.json();
    return result.results;
  }
);

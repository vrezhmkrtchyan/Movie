import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetTrendingMovies = createAsyncThunk("TrendingMoviesData/fetchGetTrendingMovies", async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=399f28f3d416e9d7984c2adb3a440d40"
    );
    const result = await response.json()
    return result.results
})

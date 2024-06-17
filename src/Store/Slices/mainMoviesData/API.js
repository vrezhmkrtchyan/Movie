
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetMovies = createAsyncThunk("mainMoviesData/fetchGetMovies", async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=399f28f3d416e9d7984c2adb3a440d40"
    );
    const result = await response.json()
    return result.results
});

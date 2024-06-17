import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSemilarMovies = createAsyncThunk("SemilarMovies/fetchSemilarMovies", async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json()
    return result.results;
});
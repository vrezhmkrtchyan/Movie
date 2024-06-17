import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetMoviesDataWithVideos = createAsyncThunk("MoviesDataWithVideos/fetchGetMoviesDataWithVideos", async () => {
    const response = await fetch("http://localhost:8080/MoviesArrayWithVideo");
    const result = response.json()
    return result
});
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGenresDetails = createAsyncThunk("GenresDetailsData/fetchGenresDetails", async (id) =>{
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=399f28f3d416e9d7984c2adb3a440d40&with_genres=${id}`
    );
    const result = await response.json()
    return result.results;
});
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchGetGenresData = createAsyncThunk("GenresData/fetchGetGenresData", async () =>{
    const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=399f28f3d416e9d7984c2adb3a440d40");
    const result = await response.json()
    return result.genres
});


export const fetchGetGenresSerialsData = createAsyncThunk(
  "GenresData/fetchGetGenresSerialsData",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/tv/list?api_key=399f28f3d416e9d7984c2adb3a440d40"
    );
    const result = await response.json();
    return result.genres;
  }
);
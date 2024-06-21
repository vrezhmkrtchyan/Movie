import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchActorsData = createAsyncThunk("ActorsData/fetchActorsData", async (id) =>{
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json()
    return result.cast
});


export const fetchProducersData = createAsyncThunk(
  "ActorsData/fetchProducersData",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json();
    return result.crew;
  }
);


export const fetchActorDetailsData = createAsyncThunk(
  "ActorsData/fetchActorDetailsData", async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json();
    return result
  }
);

export const fetchActorMoviesData = createAsyncThunk(
  "ActorsData/fetchActorMoviesData",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json();
    return result.cast;
  }
);
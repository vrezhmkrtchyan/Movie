import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTrendingSeries = createAsyncThunk(
  "SeriesMainData/fetchTrendingSeries",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=1&api_key=399f28f3d416e9d7984c2adb3a440d40"
    );
    const result = await response.json();
    return result.results;
  }
);

export const fetchAiringSeries = createAsyncThunk(
  "SeriesMainData/fetchAiringSeries",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=2&api_key=399f28f3d416e9d7984c2adb3a440d40"
    );
    const result = await response.json();
    return result.results;
  }
);

export const fetchOnTheAirSeries = createAsyncThunk(
  "SeriesMainData/fetchOnTheAirSeries",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=4&api_key=399f28f3d416e9d7984c2adb3a440d40"
    );
    const result = await response.json();
    return result.results;
  }
);


export const fetchPopularSeries = createAsyncThunk(
  "SeriesMainData/fetchPopularSeries",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=399f28f3d416e9d7984c2adb3a440d40"
    );
    const result = await response.json();
    return result.results;
  }
);


export const fetchTopRatedSeries = createAsyncThunk(
  "SeriesMainData/fetchTopRatedSeries",
  async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=399f28f3d416e9d7984c2adb3a440d40"
    );
    const result = await response.json();
    return result.results;
  }
);


export const fetchSeriesDetails = createAsyncThunk(
  "SeriesMainData/fetchSeriesDetails",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json();
    return result;
  }
);

export const fetchSeriesDetailsVideo = createAsyncThunk(
  "SeriesMainData/fetchSeriesDetailsVideo",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US&api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json();
    return result.results;
  }
);

export const fetchSeriesDetailsCast = createAsyncThunk(
  "SeriesMainData/fetchSeriesDetailsCast",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json();
    return result.cast;
  }
)

export const fetchSeriesDetailsSimilar = createAsyncThunk(
  "SeriesMainData/fetchSeriesDetailsSimilar",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1&api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json();
    return result.results;
  }
);


export const fetchSeriesDetailsEpisodes = createAsyncThunk(
  "SeriesMainData/fetchSeriesDetailsEpisodes",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=399f28f3d416e9d7984c2adb3a440d40`
    );
    const result = await response.json();
    return result.results;
  }
);




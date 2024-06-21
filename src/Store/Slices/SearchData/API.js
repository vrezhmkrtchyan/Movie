import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchMulti = createAsyncThunk(
  "SearchData/fetchSearchMulti",
  async (query) => {
    const totalPages = 10; 
    let allResults = []; 

    for (let page = 1; page <= totalPages; page++) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=${page}&query=${query}&api_key=399f28f3d416e9d7984c2adb3a440d40`
      );
      const result = await response.json();
      allResults = [...allResults, ...result.results];
    }

    return allResults;
  }
);

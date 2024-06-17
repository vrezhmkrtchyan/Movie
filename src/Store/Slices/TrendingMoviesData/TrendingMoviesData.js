import { createSlice } from "@reduxjs/toolkit";
import { fetchGetTrendingMovies } from "./API";


const TredingMoviesData = createSlice({
  name: "TredingMoviesData",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchGetTrendingMovies.pending, (state, {payload}) => {

    })
    .addCase(fetchGetTrendingMovies.fulfilled, (state, {payload}) => {
        state.data = payload
    })
    .addCase(fetchGetTrendingMovies.rejected, (state, {payload}) => {

    })
  },
});


export const selectTredingMoviesData = (state) => state.TredingMoviesData;
export const TredingMoviesDataReducer = TredingMoviesData.reducer
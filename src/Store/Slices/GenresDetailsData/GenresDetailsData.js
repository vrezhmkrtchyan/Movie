import { createSlice } from "@reduxjs/toolkit";
import { fetchGenresDetails, fetchGenresSerialsDetails } from "./API";

const GenresDetailsSlice = createSlice({
  name: "GenresDetailsData",
  initialState: {
    dataG: [],
    isLoading2: false,
    dataSG: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenresDetails.pending, (state) => {})
      .addCase(fetchGenresDetails.fulfilled, (state, { payload }) => {
        state.isLoading2 = true;
        state.dataG = payload;
      })
      .addCase(fetchGenresDetails.rejected, (state, { payload }) => {})
      .addCase(fetchGenresSerialsDetails.pending, (state) => {})
      .addCase(fetchGenresSerialsDetails.fulfilled, (state, { payload }) => {
        state.isLoading2 = true;
        state.dataSG = payload;
      })
      .addCase(fetchGenresSerialsDetails.rejected, (state, { payload }) => {});
  },
});

export const GenresDetailsReducer = GenresDetailsSlice.reducer;
export const selectGenresDetails = (state) => state.GenresDetailsData;

import { createSlice } from "@reduxjs/toolkit";
import { fetchGenresDetails } from "./API";

const GenresDetailsSlice = createSlice({
  name: "GenresDetailsData",
  initialState: {
    dataG: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenresDetails.pending, (state) => {})
      .addCase(fetchGenresDetails.fulfilled, (state, { payload }) => {
        state.dataG = payload;
      })
      .addCase(fetchGenresDetails.rejected, (state, { payload }) => {});
  },
});

export const GenresDetailsReducer = GenresDetailsSlice.reducer;
export const selectGenresDetails = (state) => state.GenresDetailsData;

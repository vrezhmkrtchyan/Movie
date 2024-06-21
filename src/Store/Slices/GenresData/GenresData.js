import { createSlice } from "@reduxjs/toolkit";
import { fetchGetGenresData, fetchGetGenresSerialsData } from "../GenresData/API";


const GenresDataSlice = createSlice({
  name: "GenresData",
  initialState: {
    isLoading: false,
    data: [],
    dataSerials: [],
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetGenresData.pending, (state, { payload }) => {})
      .addCase(fetchGetGenresData.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.data = payload;
      })
      .addCase(fetchGetGenresData.rejected, (state, { payload }) => {})
      .addCase(fetchGetGenresSerialsData.pending, (state, { payload }) => {})
      .addCase(fetchGetGenresSerialsData.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataSerials = payload;
      })
      .addCase(fetchGetGenresSerialsData.rejected, (state, { payload }) => {});
  }

});


export const selectGenresData = (state) => state.GenresData;
export const GenresDataReducer = GenresDataSlice.reducer

import { createSlice } from "@reduxjs/toolkit";
import {fetchTopSectionData} from '../TopSectionData/API'

const TopSectionDataSlice = createSlice({
  name: "TopSectionData",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopSectionData.pending, (state, { payload }) => {})
      .addCase(fetchTopSectionData.fulfilled, (state, { payload }) => {
         state.isLoading = true;
        state.data = payload;
      })
      .addCase(fetchTopSectionData.rejected, (state, { payload }) => {});
  },
});

export const TopSectionDataReducer = TopSectionDataSlice.reducer
export const selectTopSectionDate = (state) => state.TopSectionData;
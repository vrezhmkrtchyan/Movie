import { createSlice } from "@reduxjs/toolkit";
import {fetchTopSectionData} from '../TopSectionData/API'

const TopSectionDataSlice = createSlice({
  name: "TopSectionData",
  initialState: {
    data: []
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchTopSectionData.pending, (state, {payload}) => {

    })
    .addCase(fetchTopSectionData.fulfilled, (state, {payload}) => {
        state.data = payload
    })
    .addCase(fetchTopSectionData.rejected, (state, {payload}) => {
        
    })
  }
});

export const TopSectionDataReducer = TopSectionDataSlice.reducer
export const selectTopSectionDate = (state) => state.TopSectionData;
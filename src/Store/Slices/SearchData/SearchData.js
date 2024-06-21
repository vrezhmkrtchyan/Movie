import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchMulti } from "./API";

const SearchDataSlice = createSlice({
  name: "SearchData",
  initialState: {
    isLoading: true,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchSearchMulti.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(fetchSearchMulti.fulfilled, (state, {payload}) => {
        state.isLoading = false
        state.data = payload
    })
    .addCase(fetchSearchMulti.rejected, (state) =>{
         
    })
  },
});

export const selectSearchData = (state) => state.SearchData;
export const SearchDataReducer = SearchDataSlice.reducer;

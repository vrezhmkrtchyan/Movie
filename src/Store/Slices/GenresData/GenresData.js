import { createSlice } from "@reduxjs/toolkit";
import { fetchGetGenresData } from "../GenresData/API";


const GenresDataSlice = createSlice({
  name: "GenresData",
  initialState: {
    isLoading: false,
    data: []
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchGetGenresData.pending, (state, {payload}) => {

    })
    .addCase(fetchGetGenresData.fulfilled, (state, {payload}) => {
        state.data = payload
    })
    .addCase(fetchGetGenresData.rejected, (state, {payload}) => {
        
    })
  }

});


export const selectGenresData = (state) => state.GenresData;
export const GenresDataReducer = GenresDataSlice.reducer

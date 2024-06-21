import { createSlice } from "@reduxjs/toolkit";
import { fetchActorDetailsData, fetchActorMoviesData, fetchActorsData, fetchProducersData } from "./API";

const AcotorsDataSlice = createSlice({
  name: "ActorsData",
  initialState: {
    dataA: [],
    dataR: [],
    isLoading: false,
    dataD: {},
    dataM: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActorsData.pending, (state) => {})
      .addCase(fetchActorsData.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataA = payload;
      })
      .addCase(fetchActorsData.rejected, (state) => {})
      .addCase(fetchProducersData.pending, (state) => {})
      .addCase(fetchProducersData.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataR = payload;
      })
      .addCase(fetchProducersData.rejected, (state) => {})
      .addCase(fetchActorDetailsData.pending, (state) => {})
      .addCase(fetchActorDetailsData.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataD = payload;
      })
      .addCase(fetchActorDetailsData.rejected, (state) => {})
      .addCase(fetchActorMoviesData.pending, (state) => {})
      .addCase(fetchActorMoviesData.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataM = payload;
      })
      .addCase(fetchActorMoviesData.rejected, (state) => {});
  },
});

export const selectActorsData = (state) => state.ActorsData;
export const ActorsDataReducer = AcotorsDataSlice.reducer;


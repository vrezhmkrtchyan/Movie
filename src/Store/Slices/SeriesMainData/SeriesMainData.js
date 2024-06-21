import { createSlice } from "@reduxjs/toolkit";
import { fetchAiringSeries, fetchOnTheAirSeries, fetchPopularSeries, fetchSeriesDetails, fetchSeriesDetailsCast, fetchSeriesDetailsEpisodes, fetchSeriesDetailsSimilar, fetchSeriesDetailsVideo, fetchTopRatedSeries, fetchTrendingSeries } from "./API";

const SeriesMainDataSlice = createSlice({
  name: "SeriesMainData",
  initialState: {
    isLoading: false,
    dataTreding: [],
    dataAiring: [],
    dataOnTheAir: [],
    dataPopular: [],
    dataTopRated: [],
    dataSerialDetails: {},
    dataSerialDetailsVideo: [],
    dataSerialDetailsCast: [],
    dataSerialDetailsSimilar: [],
    dataSerialDetailsEpisodes: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingSeries.pending, (state) => {})
      .addCase(fetchTrendingSeries.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataTreding = payload;
      })
      .addCase(fetchTrendingSeries.rejected, (state) => {})

      .addCase(fetchAiringSeries.pending, (state) => {})
      .addCase(fetchAiringSeries.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataAiring = payload;
      })
      .addCase(fetchAiringSeries.rejected, (state) => {})
      .addCase(fetchOnTheAirSeries.pending, (state) => {})
      .addCase(fetchOnTheAirSeries.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataOnTheAir = payload;
      })
      .addCase(fetchOnTheAirSeries.rejected, (state) => {})
      .addCase(fetchPopularSeries.pending, (state) => {})
      .addCase(fetchPopularSeries.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataPopular = payload;
      })
      .addCase(fetchPopularSeries.rejected, (state) => {})
      .addCase(fetchTopRatedSeries.pending, (state) => {})
      .addCase(fetchTopRatedSeries.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataTopRated = payload;
      })
      .addCase(fetchTopRatedSeries.rejected, (state) => {})
      .addCase(fetchSeriesDetails.pending, (state) => {})
      .addCase(fetchSeriesDetails.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataSerialDetails = payload;
      })
      .addCase(fetchSeriesDetails.rejected, (state) => {})
      .addCase(fetchSeriesDetailsVideo.pending, (state) => {})
      .addCase(fetchSeriesDetailsVideo.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataSerialDetailsVideo = payload;
      })
      .addCase(fetchSeriesDetailsVideo.rejected, (state) => {})
      .addCase(fetchSeriesDetailsCast.pending, (state) => {})
      .addCase(fetchSeriesDetailsCast.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataSerialDetailsCast = payload;
      })
      .addCase(fetchSeriesDetailsCast.rejected, (state) => {})
      .addCase(fetchSeriesDetailsSimilar.pending, (state) => {})
      .addCase(fetchSeriesDetailsSimilar.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataSerialDetailsSimilar = payload;
      })
      .addCase(fetchSeriesDetailsSimilar.rejected, (state) => {})
      .addCase(fetchSeriesDetailsEpisodes.pending, (state) => {})
      .addCase(fetchSeriesDetailsEpisodes.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.dataSerialDetailsEpisodes = payload;
      })
      .addCase(fetchSeriesDetailsEpisodes.rejected, (state) => {});
  },
});

export const selectSeriesMainData = (state) => state.SeriesMainData;
export const SeriesMainDataReducer = SeriesMainDataSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import {fetchUpComingData} from '../UpComingData/API'

const UpComingDataSlice = createSlice({
    name: "UpComingData",
    initialState: {
        data: [],
        isLoading: false,
    },
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchUpComingData.pending, (state, {payload}) => {

        })
        .addCase(fetchUpComingData.fulfilled, (state, {payload}) => {
             state.isLoading = true;
            state.data = payload
        })
        .addCase(fetchUpComingData.rejected, (state, {payload}) => {

        })
    }
})

export const SelectUpComing = (state) => state.UpComingData;
export const UpComingReducer = UpComingDataSlice.reducer
// 40.815043, 43.854602
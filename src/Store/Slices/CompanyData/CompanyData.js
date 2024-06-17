import { createSlice } from "@reduxjs/toolkit";
import {fetchCompanyData} from './API'

const CompanyDataSlice = createSlice({
  name: "CompanyData",
  initialState: {
    data: []
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCompanyData.pending, (state, {payload}) =>{

    })
    .addCase(fetchCompanyData.fulfilled, (state, {payload}) => {
        state.data = payload
    })
    .addCase(fetchCompanyData.rejected, (state, {payload}) => {
        
    })
  }
});


export const selectCompanyData = (state) => state.CompanyData;
export const CompanyDataReducer = CompanyDataSlice.reducer
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCompanyData = createAsyncThunk("CompanyData/fetchCompanyData", async () => {
  const response = await fetch("http://localhost:8080/CompaniesArray");
  const result = await response.json();
  return result;
});

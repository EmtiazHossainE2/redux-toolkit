import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk('countries/fetchCountries' , async() => {
  const res = await axios.get('https://restcountries.com/v3.1/all')
  return res.data
})

const countrySlice = createSlice({
  name : 'countries' ,
  initialState : {
    isLoading : false , 
    countries : [] ,
    error : null 
  },

  extraReducers : (builder) => {
    builder.addCase(fetchCountries.pending , (state) => {
      state.isLoading = true ;
    })
    builder.addCase(fetchCountries.fulfilled , (state,action) => {
      state.isLoading = false ;
      state.countries = action.payload ;
      state.error = null;
    })
    builder.addCase(fetchCountries.rejected , (state,action) => {
      state.isLoading = false ; 
      state.countries = [] ;
      state.error = action.error.message ;
    })
  }

})

export default countrySlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice"
import countryReducer from './features/country/countrySlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    countries : countryReducer
  },
});
export default store;
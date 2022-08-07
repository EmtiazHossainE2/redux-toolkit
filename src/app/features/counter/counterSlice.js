const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name : 'counter' ,
  initialState : {count : 0},
  reducers : {
    increment : (state) => {
      state.count = state.count + 1 
    } ,
    decrement : (state) => {
      state.count = state.count - 1 
    } ,
    reset : (state) => {
      state.count = 0
    },
    update10 : (state,action) => {
      state.count = state.count + action.payload
    }
  }
})

export const {increment , decrement , reset , update10} = counterSlice.actions

export default counterSlice.reducer
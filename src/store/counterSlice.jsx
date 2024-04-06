import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0 , flag: true };

const counterSlice = createSlice({
  name: 'Counter',
  initialState : initialCounterState,
  reducers : {
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    increase(state , action){
      state.counter += action.payload
    },
    toggle(state){
      state.flag = !state.flag
    },
  }
})
export const Actions = counterSlice.actions;
export default counterSlice.reducer
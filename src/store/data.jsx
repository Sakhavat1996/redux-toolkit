import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

// toolkit --counter
// const initialCounterState = { counter: 0, flag: true };
// const counterSlice = createSlice({
//   name: "Counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter += action.payload;
//     },
//     toggle(state) {
//       state.flag = !state.flag;
//     },
//   },
// });

// toolkit-auth
// const initialAuthState = { isAuth: false };
// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuth = true;
//     },
//     logout(state) {
//       state.isAuth = false;
//     },
//   },
// });

// only redux using
// const reducerStore = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         counter: state.counter + 1
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         counter: state.counter - 1
//       };
//     case "INCREASE":
//       return {
//         ...state,
//         counter: state.counter + action.payload.amount
//       };
//     case "TOGGLE":
//       return {
//         ...state ,
//         flag: !state.flag
//       };

//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});


export default store;

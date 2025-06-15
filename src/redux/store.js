import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import authReducer from "./authSlice";
import weatherReducer from "./weatherSlice";

// Configure and create the Redux store
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
    weather: weatherReducer,
  },
  // No need to manually add thunk — included by default
});

import { configureStore } from "@reduxjs/toolkit"; // Import configureStore to create the Redux store
import tasksReducer from "./tasksSlice"; // Import tasks reducer
import authReducer from "./authSlice"; // Import authentication reducer
import weatherReducer from "./weatherSlice"; // Import weather reducer
import { thunk } from "redux-thunk"; 

// Configure and create the Redux store
export const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Task-related state management
    auth: authReducer, // Authentication state management
    weather: weatherReducer, // Weather data state management
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add Redux Thunk middleware for handling async operations
});

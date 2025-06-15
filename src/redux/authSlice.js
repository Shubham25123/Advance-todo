import { createSlice } from "@reduxjs/toolkit"; // Import createSlice from Redux Toolkit

// Define the initial authentication state
const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false, // Retrieve authentication status from localStorage (if available)
};

const authSlice = createSlice({
  name: "auth", // Name of the slice
  initialState, // Initial state object
  reducers: {
    // Action to handle user login
    login: (state) => {
      state.isAuthenticated = true; // Update state to reflect authentication
      localStorage.setItem("isAuthenticated", JSON.stringify(true)); // Persist authentication status in localStorage
    },
    
    // Action to handle user logout
    logout: (state) => {
      state.isAuthenticated = false; // Update state to reflect logout
      localStorage.setItem("isAuthenticated", JSON.stringify(false)); // Remove authentication status from localStorage
    },
  },
});

// Export actions for use in components
export const { login, logout } = authSlice.actions;

// Export the reducer to be used in the Redux store
export default authSlice.reducer;

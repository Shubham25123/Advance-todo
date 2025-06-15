import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // Import necessary functions from Redux Toolkit
import axios from "axios"; // Import axios for API requests

// ✅ Async thunk to fetch weather data based on location
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location, { rejectWithValue }) => {
    try {
      // API request options
      const options = {
        method: "GET",
        url: "https://weather-api167.p.rapidapi.com/api/weather/forecast",
        params: {
          place: location, // User's selected location
          cnt: "1",
          units: "metric", // Fetch temperature in Celsius
          type: "three_hour",
          mode: "json",
          lang: "en",
        },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY, // API key from environment variables
          "x-rapidapi-host": "weather-api167.p.rapidapi.com",
          Accept: "application/json",
        },
      };

      const response = await axios.request(options);
      return response.data; // Return weather data to be stored in Redux state
    } catch (error) {
      return rejectWithValue(error.message); // Handle errors and send error message
    }
  }
);

// ✅ Create a Redux slice to manage weather state
const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null, // Stores fetched weather data
    loading: false, // Indicates if the request is in progress
    error: null, // Stores any error message if request fails
  },
  reducers: {}, // No direct reducers, as async logic is handled by extraReducers

  extraReducers: (builder) => {
    builder
      // When API request is initiated
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when a new request starts
      })
      // When API request succeeds
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload; // Store fetched weather data
      })
      // When API request fails
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message in state
      });
  },
});

// ✅ Export reducer to be used in the Redux store
export default weatherSlice.reducer;

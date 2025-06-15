import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Async thunk to fetch weather data based on location
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location, { rejectWithValue }) => {
    try {
      // API GET request with correct URL and headers
      const response = await axios.get(
        "https://weather-api167.p.rapidapi.com/api/weather/forecast",
        {
          params: {
            place: location, // e.g., "London,GB"
            cnt: "3",
            units: "standard",
            type: "three_hour",
            mode: "json",
            lang: "en",
          },
          headers: {
            "X-Rapidapi-Key": import.meta.env.VITE_RAPIDAPI_KEY,
            "X-Rapidapi-Host": "weather-api167.p.rapidapi.com",
            Accept: "application/json",
          },
        }
      );

      return response.data; // Return API response
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// ✅ Weather slice to handle state
const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,  // Holds fetched weather data
    loading: false,     // Loading state
    error: null,        // Error message if any
  },
  reducers: {},         // No synchronous reducers for now

  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ✅ Export reducer to use in store
export default weatherSlice.reducer;

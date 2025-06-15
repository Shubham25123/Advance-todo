import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice"; // Import the Redux Thunk action for fetching weather data

const Weather = ({ location }) => {
  const dispatch = useDispatch(); // Initialize Redux dispatch function

  // Extract weather data, loading state, and error from Redux store
  const { weatherData, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    // Fetch weather data only if location is provided
    if (location) {
      dispatch(fetchWeather(location)); // Dispatch async action to fetch weather
    }
  }, [dispatch, location]);

  // Show loading message while fetching data
  if (loading) return <p>Loading weather...</p>;

  // Display error message if fetching fails
  if (error) return <p>Error: {error}</p>;

  // Handle case where no weather data is available
  if (!weatherData || !weatherData.list) return <p>No weather data available.</p>;

  return (
    <div>
      <h4>Weather in {weatherData.city?.name}</h4>
      <p>🌥️ Condition: <strong>{weatherData.list[0].weather[0].description}</strong></p>
      <p>🌡️ Temperature: <strong>{weatherData.list[0].main.temp}°C</strong></p>
    </div>
  );
};

export default Weather; // Export the Weather component for use in other parts of the app

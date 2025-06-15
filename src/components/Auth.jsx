import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice"; // Import authentication actions
import { Button } from "@mui/material"; // Import Material-UI Button component

const Auth = () => {
  const dispatch = useDispatch(); // Initialize Redux dispatch function
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get authentication status from Redux store

  return (
    <div>
      {/* Render Logout button if authenticated, otherwise render Login button */}
      {isAuthenticated ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(logout())} // Dispatch logout action
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(login())} // Dispatch login action
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default Auth;

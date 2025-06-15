import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Auth from "./components/Auth";
import Weather from "./components/Weather.jsx";
import TaskAnalytics from "./components/TaskAnalytics"; // Import Analytics Component
import { useSelector } from "react-redux";
import { Container, Paper, Typography } from "@mui/material";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>To-Do App</Typography>
        <Auth />
        {isAuthenticated ? (
          <>
            <Weather />
            <TaskInput />
            <TaskList />
            <TaskAnalytics /> {/* Display Analytics Below Task List */}
          </>
        ) : (
          <Typography variant="h6" color="error">Please log in to view your tasks.</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default App;

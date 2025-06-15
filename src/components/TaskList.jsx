import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/tasksSlice"; // Import Redux action to remove a task
import { List, ListItem, ListItemText, Button, Typography, Box } from "@mui/material"; // Import Material-UI components
import Weather from "./Weather"; // Import Weather component to display weather for outdoor tasks

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Get tasks from Redux store
  const dispatch = useDispatch(); // Initialize Redux dispatch function

  // Handle case where tasks data is not an array (prevents potential errors)
  if (!Array.isArray(tasks)) {
    return <Typography color="error">Error: Tasks data is invalid!</Typography>;
  }

  return (
    <List>
      {/* Display a message if there are no tasks, otherwise render the task list */}
      {tasks.length === 0 ? (
        <Typography>No tasks available</Typography>
      ) : (
        tasks.map((task) => (
          <Box key={task.id} className={`task-box ${task.priority.toLowerCase()}`}>
            <ListItem className="task-item">
              {/* Display task name along with its priority and category */}
              <ListItemText 
                primary={task.text} 
                secondary={`Priority: ${task.priority} | Category: ${task.category}`} 
              />

              {/* If task is an outdoor task and has a location, display the weather */}
              {task.category === "Outdoor" && task.location && (
                <Box className="weather-container">
                  <Typography variant="body2">
                    Location: {task.location}
                  </Typography>
                  <Weather location={task.location} /> {/* Fetch weather for task location */}
                </Box>
              )}

              {/* Button to delete the task */}
              <Button 
                onClick={() => dispatch(removeTask(task.id))} // Dispatch removeTask action
                variant="contained" 
                className="delete-button"
              >
                Delete
              </Button>
            </ListItem>
          </Box>
        ))
      )}
    </List>
  );
};

export default TaskList; 

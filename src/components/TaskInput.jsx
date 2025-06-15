import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { TextField, Button, Select, MenuItem, Box, Grid } from "@mui/material";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Indoor");
  const [location, setLocation] = useState("");

  //  Speech Recognition Function
  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTask(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error: ", event.error);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addTask({ id: Date.now(), text: task, priority, category, location }));
      setTask("");
      setLocation("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, px: 2 }}>
      <Grid container spacing={2}>
        {/* Full Width Task Input */}
        <Grid item xs={12}>
          <TextField 
            label="Add a Task" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
            fullWidth
          />
        </Grid>

        {/* Category Selection */}
        <Grid item xs={6} sm={3}>
          <Select value={category} onChange={(e) => setCategory(e.target.value)} fullWidth>
            <MenuItem value="Indoor">Indoor</MenuItem>
            <MenuItem value="Outdoor">Outdoor</MenuItem>
          </Select>
        </Grid>

        {/* Location Input (Only for Outdoor) */}
        {category === "Outdoor" && (
          <Grid item xs={6} sm={3}>
            <TextField 
              label="Location" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              fullWidth
            />
          </Grid>
        )}

        {/* Priority Selection */}
        <Grid item xs={6} sm={3}>
          <Select value={priority} onChange={(e) => setPriority(e.target.value)} fullWidth>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>
        </Grid>

        {/* Add Task & Speech Button */}
        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Add Task
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="secondary" onClick={startListening} fullWidth>
            🎤 Speak
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskInput;

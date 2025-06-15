import { createSlice } from "@reduxjs/toolkit"; // Import createSlice to manage task-related state

// Initial state: Load tasks from localStorage if available, otherwise set an empty array
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

// Create a Redux slice for task management
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Action to add a new task
    addTask: (state, action) => {
      state.tasks.push(action.payload); // Add task to state

      // Sort tasks based on priority (High > Medium > Low)
      state.tasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });

      // Save updated tasks to localStorage
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    // Action to remove a task by its ID
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Update localStorage
    },

    // Action to sort tasks based on priority
    sortTasks: (state) => {
      state.tasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });

      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Save sorted tasks
    },
  },
});

// Export action creators
export const { addTask, removeTask, sortTasks } = tasksSlice.actions;

// Export the reducer to be used in the Redux store
export default tasksSlice.reducer;

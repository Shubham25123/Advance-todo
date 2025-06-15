import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Typography, Paper } from "@mui/material";

const TaskAnalytics = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  if (!tasks || tasks.length === 0) {
    return <Typography>No task data available for analytics.</Typography>;
  }

  // Count Completed vs. Pending Tasks
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  const completionData = [
    { name: "Completed", value: completedTasks },
    { name: "Pending", value: pendingTasks },
  ];

  const COLORS = ["#00C49F", "#FFBB28"];

  // Count Tasks Based on Priority
  const priorityData = [
    { name: "High", value: tasks.filter((task) => task.priority === "High").length },
    { name: "Medium", value: tasks.filter((task) => task.priority === "Medium").length },
    { name: "Low", value: tasks.filter((task) => task.priority === "Low").length },
  ];

  return (
    <Paper style={{ padding: "20px", marginTop: "20px", textAlign: "center" }}>
      <Typography variant="h5">Task Progress Analytics</Typography>

      {/* Completed vs Pending Tasks Pie Chart */}
      <Typography variant="h6">Completed vs Pending Tasks</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={completionData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {completionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/* Priority Breakdown Bar Chart */}
      <Typography variant="h6">Task Priority Breakdown</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={priorityData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default TaskAnalytics;

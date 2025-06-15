
# 🚀 Smart To-Do App

A feature-rich, dynamic, and visually appealing To-Do App built with React, Redux, and Vite. This app is designed to not only manage tasks efficiently but also provide task analytics, real-time weather insights for outdoor activities, and voice-based task input to enhance user experience.
link- http://todo-app-woad-xi-33.vercel.app
## 🌟 Features

- Task Management: Add, categorize, prioritize, and delete tasks effortlessly.

- Real-Time Weather 🌦️: Get weather updates for outdoor tasks based on location.

- Task Progress Analytics 📊: Visual representation of completed vs. pending tasks & priority breakdown.

- Speech-to-Text Input 🎤: Add tasks using voice commands for hands-free experience. 

- Authentication System 🔒: Secure login system to manage tasks individually.

- Responsive UI 📱: Works seamlessly on mobile, tablet, and desktop.

- Persistent Storage 💾: Tasks and authentication status remain  saved even after page refresh.



## ⚙️ Installation & Setup

Follow these simple steps to set up and run the project on your local machine:
 
1️⃣ Clone the Repository
```bash
git clone https://github.com/SURANJAN951/todo-app.git
cd todo-app
```
2️⃣ Install Dependencies
```bash
npm install
```
3️⃣ Set Up Weather API (Required for Weather Feature 🌦️)

This app uses the RapidAPI Weather API. Follow these steps:

Create an account on RapidAPI.

Subscribe to the Weather API 
```
(Example: weather-api167.p.rapidapi.com).
```

Get your API Key from the RapidAPI dashboard.

Create a .env file in the root directory and add your API key:
```bash
VITE_RAPIDAPI_KEY=your_api_key_here
```
4️⃣ Run the App
```bash
npm run dev
```
The app will be live at http://localhost:5173/.

## 🛠️ Technologies Used
React,
Redux Toolkit,
```
npm install @reduxjs/toolkit react-redux
```
React Router,
```
npm install react-router-dom
```
MUI (Material-UI),
```
npm install @mui/material @emotion/react @emotion/styled
```
Redux Thunk,
```
npm install redux-thunk
```
Chart.js,
```
npm install chart.js
```
Recharts,
```
npm install recharts
```



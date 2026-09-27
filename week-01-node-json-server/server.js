// 1. Import the Express module
const express = require("express");

// 2. Initialize the Express application
const app = express();

// 3. Define the Port your server will run on
const PORT = 5000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

/// 4. Define a GET Route that serves raw JSON data
app.get("/api/info", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello! Your Week 1 Express server is live and serving JSON.",
    project: "Week 1 - Raw JSON Server",
    stack: ["Node.js", "Express.js", "JSON"],
    timestamp: new Date().toISOString(),
  });
});

// 5. Define a fallback route for non-existent paths (404 Not Found)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found. Try accessing /api/info",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

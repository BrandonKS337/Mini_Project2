// SUDO: Create the server

const express = require("express");
const bodyParser = require("body-parser"); // Middleware for parsing JSON data from requests
const morgan = require("morgan"); // Middleware for logging HTTP requests
const mongoose = require("mongoose"); // MongoDB library

const app = express();
const PORT = process.env.PORT || 3000;

// SUDO: Set up middleware

app.use(bodyParser.json()); // Use body-parser middleware for parsing JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser middleware for parsing URL-encoded data
app.use(morgan("dev")); // Enable request logging using morgan (optional, for development)

// SUDO: Mount/place character routes into app
const characterRoutes = require("./routes/characterRoutes");

app.use("/api/characters", characterRoutes); // Mount the characters routes at /api/characters

// SUDO: Listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// This connects to the MongoDB database
// Replace 'nexusCharacters' with your preferred database name
mongoose.connect("mongodb://localhost:27017/nexusCharacters", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

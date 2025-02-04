const fs = require('fs');
const express = require("express"); // require to import Express
const app = express(); // Create an Express application
const port = 8500; // Define a port

// Define a basic route
app.get("/", (req, res) => {
    res.send('<h1>Hello, Express Server is running!</h1>');
});

// Start the server to listen on port
app.listen(port, (err) => {
    console.log("Server is running on http://localhost:" + port);
});
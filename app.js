const express = require("express");
const app = express();
const path = require("path");

// Define the directory for static files
app.use(express.static(path.join(__dirname, "public")));

// Define a route to serve your HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/roll", (req, res) => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    res.json(randomNumber);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

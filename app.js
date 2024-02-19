const express = require("express");
const fs = require("fs");
const app = express();

// Define a route to serve your HTML file
app.get("/", (req, res) => {
    // Send the HTML file with the dynamically created JavaScript file
    //res.sendFile(__dirname + "/index.html");
    console.log("Dice roller API")
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

app.get("/roll", (req, res) => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    res.send(`${randomNumber}`);
});

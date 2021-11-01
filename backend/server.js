const express = require("express");
const cors = require("cors");
const PORT = 5000;

const appServer = express();
appServer.use(cors());

appServer.get("/", (req, res) => {
  res.send("Api is running ...");
});

// API Routes

appServer.get("/api/todo", (req, res) => {});

// TODO: Create dummy database

// TODO: Create get route to get todo items from database

// TODO: Create a post route to add to item database

// TODO: Create a update route to update item in database

// TODO: Create a delete route to delete item in database

// TODO: connect real database (mongoDB)

// TODO: Separate routes, models, controllers into separate folders/files

appServer.listen(PORT, console.log(`Server is listening on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const todoRoutes = require("./routes/todoRoutes");
const { errorHandler } = require("./middleware/errorHandler");

dotenv.config();

const appServer = express();

// Middleware
appServer.use(cors());
appServer.use(express.json());

// API Routes
appServer.use("/api/todos", todoRoutes);

// ErrorHandler
appServer.use(errorHandler);

module.exports = appServer;

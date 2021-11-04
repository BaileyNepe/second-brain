const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const { errorHandler } = require('./middleware/errorHandler');

dotenv.config();

connectDB();

const appServer = express();

// Middleware
appServer.use(cors());
appServer.use(express.json());

// API Routes
appServer.use('/api/todos', todoRoutes);

// ErrorHandler
appServer.use(errorHandler);

const PORT = process.env.PORT || 5000;

appServer.listen(PORT, console.log(`Server is listening on port ${PORT}`));

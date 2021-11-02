const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const Todo = require('./models/todoModel');

connectDB();

const appServer = express();
appServer.use(cors());
appServer.use(express.json());

appServer.get('/', (req, res) => {
  res.send('Api is running ...');
});

// API Routes

appServer.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

appServer.post('/api/todos', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
});

appServer.delete('/api/todos', async (req, res) => {
  try {
    res.status(200).send('Not working yet');
  } catch (error) {
    res.status(500);
  }
});

// TODO: Create a post route to add to item database

// TODO: Create a update route to update item in database

// TODO: Create a delete route to delete item in database

// TODO: Separate routes, models, controllers into separate folders/files

// TODO: Figure out how to order todos

const PORT = 5000;

appServer.listen(PORT, console.log(`Server is listening on port ${PORT}`));

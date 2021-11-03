const Todo = require('../models/todoModel');

/**
 * @desc Fetch all todos
 * @route GET /api/todos
 * @access restricted
 */

const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
};

/**
 * @desc Create a todo
 * @route POST /api/todos
 * @access restricted
 */

const createTodo = async (req, res, next) => {
  try {
    if (!req.body.title) {
      throw new Error('You need a bloody title');
    }
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
};

/**
 * @desc Create a todo
 * @route POST /api/todos
 * @access restricted
 */

const deleteAllTodos = async (req, res) => {
  try {
    await Todo.deleteMany();
    res.status(200).send('Todos deleted');
  } catch (error) {
    res.status(500);
  }
};

module.exports = { getAllTodos, createTodo, deleteAllTodos };

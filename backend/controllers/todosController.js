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
 * @desc Update a todo
 * @route PUT /api/todos
 * @access restricted
 */

const updateTodo = async (req, res, next) => {
  try {
    const updatedTodo = new Todo({
      _id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      energyLevel: req.body.energyLevel,
      steps: req.body.steps,
      isDone: req.body.isDone,
      dueDate: req.body.dueDate,
    });
    await Todo.updateOne({ _id: req.params.id }, updatedTodo);
    res.status(201).json({
      message: 'Todo updated successfully!',
    });
  } catch (error) {
    next(error);
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

const deleteOneTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    await todo.remove()
    res.status(200).send('Todo deleted');
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTodos, createTodo, deleteAllTodos, updateTodo, deleteOneTodo };

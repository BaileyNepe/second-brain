const express = require('express');
const router = express.Router();

const { getAllTodos, createTodo, deleteAllTodos } = require('../controllers/todosController');
//TODO do I need to require express

// TODO: Create a update route to update item in database

// TODO: Create a delete route to delete item in database

/**
 * @Path /api/todos
 */
router.route('/').get(getAllTodos).post(createTodo).delete(deleteAllTodos);
router.route('/:id').get().put().delete();

module.exports = router;

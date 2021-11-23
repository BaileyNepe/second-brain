const express = require("express");
const router = express.Router();

const {
  getAllTodos,
  createTodo,
  deleteAllTodos,
  updateTodo,
  deleteOneTodo,
} = require("../controllers/todosController");

/**
 * @Path /api/todos
 */
router.route("/").get(getAllTodos).post(createTodo).delete(deleteAllTodos);
router.route("/:id").put(updateTodo).delete(deleteOneTodo);

module.exports = router;

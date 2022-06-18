const express = require('express')
const TodoController = require('../controllers/ToDoController')
const router = express.Router()
router.route('/todo')
    .post(TodoController.AddTodo)
    .get(TodoController.View)
    .delete(TodoController.DeleteDetails)

 module.exports = router
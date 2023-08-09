const express = require('express')
const routes = express.Router()
const { getTask, createTask, updateTasks, getAllTasks, deleteTasks } = require('../controller/tasks')

routes.route('/').get(getAllTasks).post(createTask)
routes.route('/:id').patch(updateTasks).delete(deleteTasks).get(getTask)

module.exports = routes
const express = require('express')

const router  = express.Router()

const {getAllTasks,getTask,createTask,updateTask,deleteTask} = require('../controllers/tasks')



//route for ('/') url for getting all the tasks and creating a task.
router.route('/').get(getAllTasks).post(createTask)

//route to passing parameter with url to access a single task
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)





module.exports = router
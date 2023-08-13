const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    }
    catch (err) {
        res.status(500).json({ err })
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOne({ _id: taskId })
        if (!task) {
            res.status(404).json({ msg: `No task found with id ${taskId}` })
            return
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ error })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (err) {
        res.status(500).json({ err })
    }
}

const updateTasks = (req, res) => {
    res.json({ id: req.params.id })
}

const deleteTasks = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOneAndDelete({ _id: taskId })
        if (!task) {
            res.status(404).json({ msg: `No task found with id ${taskId}` })
            return
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = {
    getTask,
    getAllTasks,
    updateTasks,
    deleteTasks,
    createTask
}
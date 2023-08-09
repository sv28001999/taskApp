const getAllTasks = (req, res) => {
    res.send("Get all the tasks")
}

const getTask = (req, res) => {
    res.json({ id: req.params.id })
}

const createTask = (req, res) => {
    res.json(req.body)
}

const updateTasks = (req, res) => {
    res.json({ id: req.params.id })
}

const deleteTasks = (req, res) => {
    res.json({ id: req.params.id })
}

module.exports = {
    getTask,
    getAllTasks,
    updateTasks,
    deleteTasks,
    createTask
}
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const port = 2800

app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.listen(port, console.log(`This project is hosted on ${port} port..`))
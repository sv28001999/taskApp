const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const port = 2800
require('dotenv').config()

app.use(express.static('./public'));

app.use(express.json())

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`This project is hosted on ${port} port..`))
    } catch (error) {
        console.log(error)
    }
}

start()
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'task name is required'],
        maxlength: [20, 'task name cannot more than 20 character']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)
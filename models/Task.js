const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"],
        trim: true,
        maxlength: [20, "Please enter 20 characters at most"]
    },
    complete: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);
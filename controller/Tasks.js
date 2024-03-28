const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks })
    }
    catch (e) {
        res.status(500).json({ msg: e.errors.name.name })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task })
    }
    catch (e) {
        res.status(500).json({ msg: e.errors.name.name })
    }
}

const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        res.status(200).json({ task });

        if (!task) {
            return res.status(404).json({ msg: "No task present at this ID" })
        }
    }
    catch (e) {
        res.status(500).json({ msg: e.message })
    }
}

const updateTask = async (req, res) => {
    try {

        const id = req.params.id;
        const updatedTask = await Task.findOneAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({ updatedtask: updatedTask });
        if (!task) {
            res.status(500).json({ msg: "No task present" })
        }
    }
    catch (e) {
        res.status(500).json({ msg: e });
    }
}

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        await Task.deleteOne(task);
        res.status(200).json({ msg: "Successfully deleted" });
        if (!task) {
            res.status(500).json({ msg: "Cannot find the task" })
        }
    }
    catch (e) {
        res.status(500).json({ msg: e })
    }
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
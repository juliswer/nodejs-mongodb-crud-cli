const Task = require('../models/Task');

const addTask = async (task) => {
    await Task.create(task);
}

module.exports = {
    addTask
}
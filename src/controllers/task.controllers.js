const Task = require('../models/Task');
const {connection} = require('../db')

const addTask = async (task) => {
    await Task.create(task);
    await connection.close();
}

module.exports = {
    addTask
}
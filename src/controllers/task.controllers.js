const Task = require('../models/Task');
const {connection} = require('../db')

const addTask = async (task) => {
    await Task.create(task);
    console.log('New Task Created');
    await connection.close();
}

const listTasks = async () => {
    const tasks = await Task.find();
    console.log(tasks);
};

module.exports = {
    addTask,
    listTasks
}
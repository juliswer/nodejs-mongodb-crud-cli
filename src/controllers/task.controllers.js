const Task = require('../models/Task');
const {connection} = require('../db')

const addTask = async (task) => {
    await Task.create(task);
    console.log('New Task Created');
    await connection.close();
}

const listTasks = async () => {
    const tasks = await Task.find().lean();
    console.table(tasks.map(task => ({
        id: task._id.toString(),
        title: task.title,
        description: task.description,
    })));
};

module.exports = {
    addTask,
    listTasks
}
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
    await connection.close();
    process.exit(0);
};

const deleteTask = async (id) => {
    await Task.findByIdAndDelete(id);
    console.log('Task Deleted');
    await connection.close();
    process.exit(0);
}

const updateTask = async (id, title, description) => {
    await Task.findByIdAndUpdate(id, {title, description});
    console.log('Task Updated');
    await connection.close();
    process.exit(0);
}

module.exports = {
    addTask,
    listTasks,
    deleteTask,
    updateTask
}
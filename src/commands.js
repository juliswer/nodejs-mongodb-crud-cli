const {program} = require('commander');
const {prompt} = require('inquirer');
const {addTask, listTasks, deleteTask, updateTask} = require('./controllers/task.controllers');

program.version('0.0.1').description('A command line tool for managing your projects');

program.command('save').action(async () => {
    const answers = await prompt([
        {
            type: 'input',
            message: 'Task Title',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Task Description',
            name: 'description'
        }
    ]);

    addTask(answers);
});

program.command('list').action(() => {
    listTasks();
})

program.command('delete <id>').action((id) => {
    deleteTask(id);
})

program.command('update <id>').action(async (id) => {
    const answers = await prompt([
        {
            type: 'input',
            message: 'Task Title',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Task Description',
            name: 'description'
        }
    ]);

    updateTask(id, answers.title, answers.description);
})

program.parse(process.argv);
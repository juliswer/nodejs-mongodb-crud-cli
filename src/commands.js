const {program} = require('commander');
const {prompt} = require('inquirer');

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

    console.log(answers);
});

program.parse(process.argv);
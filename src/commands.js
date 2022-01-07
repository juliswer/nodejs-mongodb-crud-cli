const {program} = require('commander');

program.version('0.0.1').description('A command line tool for managing your projects');

program.command('save <title> <description>').action((title, description) => {
    console.log(title, description);
});

program.parse(process.argv);
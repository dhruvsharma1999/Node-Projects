const validator = require('validator');
const notes = require("./notes");
const chalk = require('chalk');
const yargs = require('yargs');


//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNotes(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list all the notes',
    builder: {
        title:{
            describe: 'listing Note title',
        }
    },
    handler (argv){
        notes.listNotes()
    }
})

//create read command 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'list note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()




// console.log(yargs.argv)

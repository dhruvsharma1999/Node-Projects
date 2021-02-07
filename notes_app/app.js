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
    handler: function(argv) {
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
    handler: function(argv) {
        notes.removeNotes(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list all the notes',
    handler: function() {
        
    }
})

//create read command 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        
    }
})

yargs.parse()




// console.log(yargs.argv)

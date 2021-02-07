const fs = require('fs')
const chalk = require('chalk')
const getNotes = function() {
    console.log("Your notes")
}

const addNotes = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    
    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse.bold("Note added successfuly!"))
    } else {
        console.log(chalk.red.inverse.bold("Note Title Taken!"))
    }

}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNotes = function(title){
    const notes = loadNotes()
    const foudNote = notes.filter(function(note){
        return note.title !== title
    })

    if(notes.length > foudNote.length){
        console.log(chalk.green.inverse.bold('Note Removed!'))
    }else{
        console.log(chalk.red.inverse.bold('No Note Found'))
    }

    saveNotes(foudNote)
}


module.exports = {
    addNotes: addNotes,
    getNotes: getNotes,
    removeNotes: removeNotes
}
const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title )
    
    if (!duplicateNote){
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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const foudNote = notes.filter((note) => note.title !== title)

    if(notes.length > foudNote.length){
        console.log(chalk.green.inverse.bold('Note Removed!'))
    }else{
        console.log(chalk.red.inverse.bold('No Note Found'))
    }

    saveNotes(foudNote)
}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse.bold('Your Notes'))
    notes.forEach(note => console.log(note.title))
}
const readNotes = (title) => {
    const notes = loadNotes()
    const readnote = notes.find((note) => note.title === title)
    if(readnote){
        console.log(chalk.green.inverse.bold('Note Title: \n' + readnote.title))
        console.log(chalk.blue.inverse.bold('Note Body: \n' + readnote.body))
    }
    else{
        console.log(chalk.red.inverse.bold('Note not found'))
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}
const fs = require('fs');

const fetchAllNotes = () => {
    try {
        var existingNotes = fs.readFileSync('notes.json');
        return JSON.parse(existingNotes);
    } catch {
        return [];
    }
};

const addNote = (title, body) => {
    var allNotes = fetchAllNotes();

    var newNote = {
        title: title,
        body: body
    };

    allNotes.push(newNote);

    fs.writeFileSync('notes.json', JSON.stringify(allNotes));
};

const getNote = (title) => {
    return fetchAllNotes().find(i => i.title === title);
};

const getAllNotes = () => {

};

const removeNote = (title) => {

};

module.exports = {
    addNote,
    getNote,
    getAllNotes,
    removeNote
};
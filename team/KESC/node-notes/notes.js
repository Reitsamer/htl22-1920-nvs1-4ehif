const fs = require('fs');

const fetchAllNotes = () => {
    try {
        const existingNotes = fs.readFileSync('notes.json');
        return JSON.parse(existingNotes);
    } catch {
        return [];
    }
};

const addNote = (title, body) => {
    const allNotes = fetchAllNotes();

    if (allNotes.findIndex(n => n.title === title) > -1)
        return false;

    const newNote = {
        title: title,
        body: body
    };

    allNotes.push(newNote);

    fs.writeFileSync('notes.json', JSON.stringify(allNotes));
    return true;
};

const getNote = (title) => {
    return fetchAllNotes().find(i => i.title === title);
};

const getAllNotes = () => fetchAllNotes();

const removeNote = (title) => {
    const allNotes = fetchAllNotes();
    const index = allNotes.findIndex(i => i.title === title);
    if (index === -1)
        return false;
    allNotes.splice(index, 1);
    fs.writeFileSync('notes.json', JSON.stringify(allNotes));
    return true;
};

const printNote = (note) => {
    console.log(`Title: ${note.title}\nBody: ${note.body}`);
};

module.exports = {
    addNote,
    getNote,
    getAllNotes,
    removeNote,
    printNote
};
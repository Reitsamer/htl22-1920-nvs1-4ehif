const {writeFileSync} = require('fs');

const {melody} = require("./melody");
var {buildMidiData} = require("./midiFromMelody");

const yargs = require('yargs');
const argv = yargs.usage('$0 <filePath>',
    'Receive randomly generated sequences of notes that make up a melody and put them into a MIDI file.',
    (yargs) => {
        yargs.positional('filePath', {
            describe: 'the path to save the resulting MIDI file to',
            type: 'string'
        });
        yargs.option('instrument', {
            demandOption: false,
            default: 47,
            describe: 'Sets the MIDI instrument to use, e.g. 47 being the orchestral harp. (see \nhttps://en.wikipedia.org/wiki/General_MIDI#Program_change_events)',
            type: 'number'
        })
            .argv
    }).argv;

const filePath = argv.filePath;
const instrument = argv.instrument;

melody((error, melody) => {
    if (error) {
        console.error(error);
        return
    }

    const midData = buildMidiData(melody.notes, instrument - 1);
    writeFileSync(filePath, midData)
});

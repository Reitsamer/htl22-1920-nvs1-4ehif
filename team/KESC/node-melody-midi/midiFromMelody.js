const MidiWriter = require('midi-writer-js');

const buildMidiData = (notes, instrument) => {
    var track = new MidiWriter.Track();

    track.addEvent(new MidiWriter.ProgramChangeEvent({instrument: instrument /* Electric guitar (muted) */}));
    notes.forEach(note => {
            var duration;
            switch (note.duration) {
                case 1:
                    duration = 4;
                    break;
                case 2:
                    duration = 2;
                    break;
                case 3:
                    duration = [2, 1];
                    break;
                case 4:
                    duration = 1;
                    break;
            }
            track.addEvent(new MidiWriter.NoteEvent({
                pitch: note.name,
                duration: duration,
                startTick: note.start * 32,
                velocity: 100
            }));
        }
    );
    var write = new MidiWriter.Writer(track);

    return write.buildFile();
};

module.exports = {
    buildMidiData
};

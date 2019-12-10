const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');
const format = ".png";

const exportDir = path.join(__dirname, 'exports/');
const importDir = path.join(__dirname, 'output/');

const ensureExportDir = () => {
    if (!fs.existsSync(exportDir)) {
        fs.mkdirSync(exportDir)
    }
};

const getMaxIndex = () => {
    return fs.readdirSync(importDir).length;
};

const convert = () => {
    const maxIndex = getMaxIndex() - 1;
    ensureExportDir();
    let thumbSource = path.join(importDir, `img${maxIndex}` + format);
    let thumbDest = path.join(exportDir, 'thumb' + maxIndex + format);
    fs.copyFileSync(thumbSource, thumbDest);
    var fileName = 'result' + maxIndex + '.mp4';
    var filePath = path.join(exportDir, fileName);

    ffmpeg()
        .addInput(path.join(importDir, 'img%03d' + format))
        .videoBitrate(10240)
        // .videoCodec('h264_videotoolbox')
        .videoCodec('libx264')
        .outputOption('-pix_fmt yuv420p')
        .noAudio()
        .fps(10)
        .format('mp4')
        .save(filePath)
        .on('end', function () {
            console.log('[Export] Animation exported to ' + filePath + '.');
        });

};

module.exports = {
    convert,
};
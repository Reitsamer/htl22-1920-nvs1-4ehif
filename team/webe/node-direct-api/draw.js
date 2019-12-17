const {createCanvas} = require('canvas');
const path = require('path');
const fs = require('fs');
const color = require('randomcolor');
let running = 0;
const outputDir = path.join(__dirname, 'output/');

const draw = (data, spacing) => {
    let runSpacing;
    for (runSpacing = 0; runSpacing < data.directions.length; runSpacing += spacing) {
        drawNLines(data, runSpacing);
    }
};

const drawNLines = (data, count) => {
    const canvas = createCanvas(1000, 1000);
    const _ctx = canvas.getContext('2d');
    let localRun;
    for (localRun = 0; localRun < count; localRun++) {
        drawDirection(_ctx, data.directions[localRun]);
    }
    save(_ctx, canvas);
};

const save = (_ctx, canvas) => {
    _ctx.globalCompositeOperation = "destination-over";
    _ctx.fillStyle = "#FFFFFF";
    _ctx.fillRect(0, 0, canvas.width, canvas.height);
    _ctx.globalCompositeOperation = "source-over";
    let strNum = String(running);
    strNum = strNum.padStart(3, "0");
    ensureOutputDir();
    let ws = fs.createWriteStream(`${__dirname}/output/img${strNum}.png`);
    canvas.createPNGStream().pipe(ws);
    running += 1;
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

const randomColor = () => {
    switch (getRandomInt(0, 3)) {
        case 0:
            return color({hue: 'yellow'});
        case 1:
            return color({hue: 'blue'});
        case 2:
            return color({hue: 'red'});
    }
};

const drawDirection = (ctx, direction) => {
    ctx.strokeStyle = randomColor();
    //ctx.lineWidth = getRandomInt(1, 10);
    ctx.lineWidth = 5;
    ctx.beginPath();
    const pointA = direction.coordinates.a;
    const pointB = direction.coordinates.b;
    ctx.moveTo(pointA.x / 3, pointA.y / 3);
    ctx.lineTo(pointB.x / 3, pointB.y / 3);
    ctx.stroke();
};

const ensureOutputDir = () => {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
};

module.exports = {
    draw,
};
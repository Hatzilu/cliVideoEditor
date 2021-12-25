const readline = require('readline');
const videoEditor = require('./Editor.ts');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Kapeet\'s CLI Video Editor, built using NodeJS, TypeScript and FFmpeg! \n\nEnter a YouTube video url: ', function (url) {
    if (!url.startsWith('https://') || !url.includes("youtube")) {
        console.log("Invalid URL!");
        rl.close();
    }
    rl.question('Which action would you like to do with this video? : ', function (action) {
        console.log(action);
    });
});

rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    process.exit(0);
});

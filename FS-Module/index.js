const fs = require('node:fs');

console.log('first')
// reading file synchronously
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents)

console.log('second')

// reading file asynchronously
fs.readFile("./file.txt", "utf-8", (error, data) => {//error first callback function
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
})
console.log('third')

// writing file synchronously
fs.writeFileSync("./greet.txt", "Hello world");

// writing file asychronously
fs.writeFile("./greet.txt", " Hello Abishek!", { flag: 'a' }, (error) => {
    if (error) {
        console.log(err);
    }
    else {
        console.log('File written');
    }
})

// creating  new folder

const folderName = './test';
if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
}
// reading files in the directory
const content = fs.readdirSync(folderName);
console.log(content)

// renaming the directory
fs.rename(folderName, './renamedTest', err => {
    if (err) {
        console.log(err);
    }
})

const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf-8',
    highWaterMark: 2
});

const writableStream = fs.createWriteStream('./file2.txt');

readableStream.on('data', (chunk) => {
    console.log('Chunk:', chunk);
    writableStream.write(chunk);
})
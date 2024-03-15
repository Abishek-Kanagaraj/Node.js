const zlib = require('node:zlib');
const { pipeline } = require('node:stream');
const fs = require('node:fs');

const gzip = zlib.createGzip();
const source = fs.createReadStream('../FS-Module/file.txt');
const destination = fs.createWriteStream('./file.txt.gz');

pipeline(source, gzip, destination, (err) => {
    if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
});

const input = '.................................';
zlib.deflate(input, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString('base64'));
});

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
zlib.unzip(buffer, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString());
});
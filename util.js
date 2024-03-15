const util = require('node:util');
const fs = require('fs');

async function fn() {
    return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
    if (err) {
        throw err;
    }
    console.log(ret);
}); 

const debuglog = util.debuglog('foo');

const formattedString = util.format('Hello, %s!', 'world');
console.log(formattedString); 

debuglog('hello from foo [%d]', 123);


const readFileAsync = util.promisify(fs.readFile);

readFileAsync('./FS-Module/file.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));
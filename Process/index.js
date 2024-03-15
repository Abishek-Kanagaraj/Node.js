const process = require('node:process')


process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

console.log('This message is displayed first.');

// the asynchronous call in exit event will not run 
// because the exit event will immediately exit the node.js process leaving the work in event loop abondoned
process.on('exit', (code) => {
    setTimeout(() => {
        console.log('This will not run');
    }, 1000);
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
});

new Promise((resolve, reject) => {
    resolve('First call');
    resolve('Swallowed resolve');
    reject(new Error('Swallowed reject'));
}).then((res) => {
    return console.log(resu); // Note the typo error
});
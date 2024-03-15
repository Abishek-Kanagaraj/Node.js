const{Buffer} =require('node:buffer')

const { Blob } = require('node:buffer');
const { setTimeout: delay } = require('node:timers/promises');

const buffer = Buffer.from("Abishek","utf-8");

console.log(buffer.toJSON());
console.log(buffer)
console.log(buffer.toString())

// const blob = new Blob(['hello there']);

// const mc1 = new MessageChannel();
// const mc2 = new MessageChannel();

// mc1.port1.onmessage = async ({ data }) => {
//   console.log(await data.arrayBuffer());
//   mc1.port1.close();
// };

// mc2.port1.onmessage = async ({ data }) => {
//   await delay(5000);
//   console.log(await data.arrayBuffer());
//   mc2.port1.close();
// };

// mc1.port2.postMessage(blob);
// mc2.port2.postMessage(blob);

// blob.text().then(console.log);

const buf=Buffer.alloc(5,'abi')

console.log(buf)

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('BCD');
const buf3 = Buffer.from('ABCD');

console.log(buf1.compare(buf1));
// Prints: 0 as they are equal
console.log(buf1.compare(buf2));
// Prints: -1 as buf1 is smaller than buf2
console.log(buf1.compare(buf3));
// Prints: -1 as buf1 is smaller than buf3
console.log(buf2.compare(buf1));
// Prints: 1 as buf2 is higher than buf1
console.log(buf2.compare(buf3));
// Prints: 1 as buf2 is higher than buf3
console.log([buf1, buf2, buf3].sort(Buffer.compare));
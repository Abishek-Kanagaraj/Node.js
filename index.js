
const addFn = require('./add')
// const add=require('./exports')
const math = require('./exports')

const data = require('./data.json')

const { add, subtract } = math //destructring the objects

console.log('Hello from index.js')
const sum = addFn(2, 3);
console.log(sum)
// console.log(add(2,5))
console.log(add(2, 5));
console.log(subtract(6, 3));
console.log(data)
console.log(data.name)

const path = require('node:path')


console.log(__filename)
console.log(__dirname)

console.log(path.basename(__filename))
console.log(path.basename(__dirname))

console.log(path.extname(__filename))
console.log(path.extname(__dirname))

console.log(path.format(path.parse(__filename)))

console.log(path.isAbsolute(__filename))
console.log(path.join("filename1","filename2","data.json"))
console.log(path.join("/filename1","filename2","data.json"))
console.log(path.join("/filename1","//filename2","data.json"))
console.log(path.join("/filename1","filename2","../data.json"))

console.log(path.join(__dirname,"data.json"))
console.log(path.resolve("filename1","filename2","data.json"))
console.log(path.resolve("/filename1","filename2","data.json"))
console.log(path.resolve("/filename1","//filename2","data.json"))
console.log(path.resolve("/filename1","filename2","../data.json"))

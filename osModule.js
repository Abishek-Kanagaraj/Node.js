const Os = require('node:os')


console.log("Platform: " + Os.platform());
console.log("Architecture: " + Os.arch());
console.log('Operating System type : ' + Os.type());
console.log('total memory : ' + Os.totalmem() + " bytes.");
console.log('CPU:',(Os.cpus()))
console.log('CPU Core length:',(Os.cpus().length))
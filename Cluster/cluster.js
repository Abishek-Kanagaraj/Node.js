const cluster = require('node:cluster')
const http = require('node:http')
const OS = require('node:os');

console.log((OS.cpus().length))

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    cluster.fork()
    cluster.fork()
} else {
    console.log(`Worker ${process.pid} started`);
    const server = http.createServer((request, response) => {
        if (request.url === '/') {
            response.writeHead(200, { "Content-Type": "text/plain" })
            response.end("Home Page");
        }
        else if (request.url === '/slow-page') {
            for (let i = 0; i < 6000000000; i++) { }
            response.writeHead(200, { "Content-Type": "text/plain" })
            response.end("Slow Page");
        }
    });

    server.listen(8000, () => console.log("Server running in port 8000"));
}
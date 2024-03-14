const http = require('node:http')

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
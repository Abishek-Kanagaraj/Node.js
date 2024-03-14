const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end('Home Page')
    }
    else if (request.url === "/about") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end('About Page')
    }
    else if (request.url === "/api") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify({
            firstName: "Abishek",
            lastName: "Kanagaraju"
        }))
    }
    else {
        response.writeHead(404);
        response.end("Page Not Found")
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000")
})

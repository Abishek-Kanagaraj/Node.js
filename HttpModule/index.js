const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer((request, response) => {
    const name = {
        firstName: 'Abishek',
        lastname: 'Kanagaraju'
    };

    response.writeHead(200, { "Content-Type": "text/html" })
    fs.createReadStream(__dirname+"/index.html").pipe(response)
    // const html = fs.readFileSync('./index.html', 'utf-8')
    // response.end(JSON.stringify(name));
    // response.end('<html><body><h1>Hello, World!</h1></body></html>');
    // response.end(html)
});

server.listen(3000, () => {
    console.log("Server running on port 3000")
})

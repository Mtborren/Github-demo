const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
    let filePath = path.join(__dirname, request.url === '/' ? 'index.html' : request.url);

    fs.readFile(filePath, (error, content) => {
        if(error) {
            response.writeHead(404);
            response.end(`Can't find that try adding an ext like .html or .js etc...`);
        } else {
            response.writeHead(200);
            response.end(content);
        }
    })    
})

server.listen(8080, () => console.log(`Server running on port 8080`));
// Exercise server
// Setup a basic web server that when you navigate in your browser displays the string "Hello, World!" in plain text.
// Place h1 tags around "Hello, World!". Display this string using the web server as html.

const http = require('http');
const fs = require('fs');
const path = require('path')

// const fileName = 'path/to/file';
// const stream = fs.createWriteStream(fileName);
// const port = 8080;

let filePath = '.' + request.url;

//look at morgans repo titled solid parakeet to fix this code

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello, World!");
    response.end();
}).listen(8080);

// http.createServer(function(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     stream.once('open', function(fd){
//         let html = buildHtml();
//     //     let para = document.createElement("h1");
//     //     let node = document.createTextNode("Hello, World!");
//     //     para.appendChild(node);
//         stream.end(html);
//     })
//     // document.createElement("H1");
//     // document.createTextNode("Hello, World!");
//     response.write("Hello, World!");
//     response.end();
// }).listen(8080);
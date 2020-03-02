// Exercise server
// Setup a basic web server that when you navigate in your browser displays the string "Hello, World!" in plain text.
// Place h1 tags around "Hello, World!". Display this string using the web server as html.

const http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1>It Finally Works!!</h1>");
    response.end()
}).listen(8080);


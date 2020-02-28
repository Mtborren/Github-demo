// Exercise server
// Setup a basic web server that when you navigate in your browser displays the string "Hello, World!" in plain text.
// Place h1 tags around "Hello, World!". Display this string using the web server as html.

const http = require('http');
const fs = require('fs');
//look at morgans repo titled solid parakeet to fix this code


http.createServer(function(request, response) {
    http.get('./Desktop\cbc8\Github-demo\Homework\ExerciseServer\server.js', (res) => {
        let newHead = document.createElement("h1");
        let newContent = document.createTextNode("Hello, World!")
        newHead.appendChild(newContent);
    })
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("Hello, World!");
    response.end();
}).listen(8080);


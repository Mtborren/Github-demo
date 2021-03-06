// Exercise server part 2
// Make it a web server so that when a browser navigates to "localhost:8080/about" you server a html web page.

let http = require('http');
let path = require('path');
let port = 8080;
let about = './about.html';
let fs = require('fs');

http.createServer((request, response) => {
    console.log('starting up!');

    let filePath = request.url;

    if (filePath == '/'){
        filePath = about;
    }

    let extname = String(path.extname(filePath)).toLowerCase();

    let mimeTypes = {
        '.html': 'text/html'
    }

    fs.readFile(filePath, function(error, content){
        if(error){
            response.write("Something Happened 0.0")
        } else {
            response.end(content);
        }
    });

    }).listen(port);

/**
 * Few notes, some of this could use a little formatting magic, but overall good, I added 
 * two files anotherServer.js and index.html to demo part 2 to demo having two pages served
 * just run node anotherServer to check it out
 */
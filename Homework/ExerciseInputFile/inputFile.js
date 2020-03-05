// Exercise input/file
// Create a program that reads a user's input and appends it to a file. Once it is saved it the reads that file to the console.
// Emit Event:
// When a file has been created
// When a file has been written to
// When a file has been read 

/**
 * Great work, the only extra thing I'd like to see if you can read the entire 
 * message we the new appendage and log it to the console. 
 */

const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What's your favorite cartoon?\n`, (cartoon) => {
    myEmitter.emit('create');
    fs.appendFile('message.txt', cartoon, function(err){
        if(err) throw err;
        console.log(`Oh cool, I like ${cartoon} too!`)
        myEmitter.emit('write');
    });
    readline.close();
})

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('create', () => {
    console.log("File Created.");
})

myEmitter.on('write', () => {
    console.log("File Written.");
})

let rs = fs.createReadStream('message.txt');

rs.on('open', () => {
    console.log("The file has been read.")
});
// Exercise prompt
// Create a Node Prompt that asks a question
// Then have the prompt print to the console a string with some of the user's response
// Then after that question is asked. Ask another question
// Put the input logic and the output logic into different files and require both of them into a main file. Make the main file callable from the cli.

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let readlineQuestion = module.exports = {

// readlineQuestion1 : readline.question("Who's That Pokémon? \n https://s3.amazonaws.com/tinycards/image/c2fc8f976103d5605984f4fb5b5b3ac1\n", (name) => {
//         console.log(`You Guessed: ${name}!`);
//     }),

// readlineQuestion2 : readline.question("Would you like to play again?\nPlease enter yes or no.\n", (answer) => {
//         console.log(`You Said ${answer}!`);
//     })

// }

/*
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

module.exports = {
    rl: rl,
    prompt(prompt) {
        rl.setPrompt(prompt);
        rl.prompt();
    }, 
    in(callback) {
        rl.on('line', input => {
            if(input.trim() == 'exit') {
                rl.close();
            } else {
                callback(input);
            }
        })
    }
}
*/
// Exercise prompt
// Create a Node Prompt that asks a question
// Then have the prompt print to the console a string with some of the user's response
// Then after that question is asked. Ask another question
// Put the input logic and the output logic into different files and require both of them into a main file. Make the main file callable from the cli.


//Working Code - Guess That Pokémon!

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function question1(){
//     readline.question("Who's That Pokémon? \n https://s3.amazonaws.com/tinycards/image/c2fc8f976103d5605984f4fb5b5b3ac1\n", (name) => {
//     console.log(`You Guessed: ${name}!`);
//     if(`${name}` !== "pikachu"){
//         console.log(`You seem to hear the professor's voice in your head. Trainer, this isn't the time to guess ${name}! Try again.`);
        
//     }else{
//         console.log("That's Correct! You Must Be A Pokémon Master!");
        
//     }
//     question2();
// }) 
// }

// function question2(){
//     readline.question("Would you like to play again?\nPlease enter yes or no.\n", (answer) => {
//     if(`${answer}` !== "yes"){
//         console.log("Thanks for playing!");
//         readline.close();
//     } else {
//         question1();
//     }
// })
// }

// question1();
// question2();



//Attempt to separate into two separate files

/**
 * This was doing that crazy double output, I haven't looked to hard but I think it has 
 * something to do with the fact that you created multiple readline interfaces so its 
 * outputting both, in mine (not necessary with the setup I used) as a precuationary 
 * if I needed to use my readline interface again I imported it from the ./input.js, might
 * fix this idk worth a try
 */

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let readlineQuestion = require('./input.js');
// let readlineAnswer = require('./output.js');


// function question1(){
//     readlineQuestion.readlineQuestion1
//     readlineAnswer.readlineAnswer1
//     question2();
// }


// function question2(){
//     readlineQuestion.readlineQuestion2
//     readlineAnswer.readlineAnswer2
// }

// question1();
// question2();

/*
const input = require('./input');
const output = require('./output');

input.prompt(`Who's That Pokémon? \n https://s3.amazonaws.com/tinycards/image/c2fc8f976103d5605984f4fb5b5b3ac1\n`);

input.in(output.isCorrect);
*/
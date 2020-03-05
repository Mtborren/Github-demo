// Exercise prompt
// Create a Node Prompt that asks a question
// Then have the prompt print to the console a string with some of the user's response
// Then after that question is asked. Ask another question
// Put the input logic and the output logic into different files and require both of them into a main file. Make the main file callable from the cli.

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })



// module.exports = {
// readlineAnswer1 : 
//     () => {if(`${name}` !== "pikachu"){
//     console.log(`You seem to hear the professor's voice in your head. Trainer, this isn't the time to guess ${name}! Try again.`);
//     } else {
//         console.log("That's Correct! You Must Be A Pokémon Master!");
//     } question2();},

// readlineAnswer2 : 
//     () => {if(`${answer}` !== "yes"){
//     console.log("Thanks for playing!");
//     readline.close();
//     }else{
//         question1();
//     } 
// }  
// }

/*
const input = require('./input');

module.exports = {
    isCorrect(pokemon) {
        if(pokemon.toUpperCase() == 'PIKACHU') {
            console.log(`10/10 you must be a human pokedex`);
            input.rl.close();
        } else {
            console.log(`Gimme your gym badges, you don't deserve them anymore`);
            input.rl.close();
        }
    }
}
*/
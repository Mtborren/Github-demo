//Exercise CMD Homework

// Create a Javascript file and load it to your command line tool (cmd || powershell || terminal || git bash)
// Create a second Javascript file and call it from the first file using exports

// let videoGame = require('./message.js');

// let videoGame1 = new videoGame('Half/Life', '3');

// console.log(videoGame1.title());

//  end

//Exercise Wait Homework

// Create a function that takes some time to execute (You can count to a really high number, or use a setInterval)
// Create a second function that does something once the first function has completed. (Prefer that you use a Promise)
// Separate those two functions into separate files and call one of them using node


// let dbz = require('./message.js')
// function attack(){
//     dbz + setTimeout(function(){
//         console.log("HAAA!"); 
//     }, 5000);
// }
// attack();

//end

//Promise
let good = require('./message.js');
let buyGame = () => {
    isTheGameGood
        if(good = true){
            console.log("Buy This Game!");
        } else if(good != true){
            console.log("Do Not Buy This Game!");
        }
}
buyGame();


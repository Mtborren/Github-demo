//Exercise CMD Homework

// Create a Javascript file and load it to your command line tool (cmd || powershell || terminal || git bash)
// Create a second Javascript file and call it from the first file using exports
// module.exports = function(gameTitle, subTitle){
//     this.gameTitle = gameTitle;
//     this.subTitle = subTitle;
//     this.title = function(){
//         return this.gameTitle + '\n' + '    ' + this.subTitle;
//     } 
// }

/**
 * Since you're instantiating an object you might want to just make this a class, this is 
 * how we created classes in ES5 that is why you are able to use the "new" keyword in 
 * app.js. An ES6 class might look something like this: (Also added some lines to app.js to
 * facilitate this class)
 */

/*
class VideoGame {
    constructor(gameTitle, version) {
        this.gameTitle = gameTitle;
        this.version = version;
    }

    title() {
        console.log(`${this.gameTitle} ${this.version}`);
    }
}

module.exports = VideoGame;
*/

//end






//Exercise Wait Homework

// Create a function that takes some time to execute (You can count to a really high number, or use a setInterval)
// Create a second function that does something once the first function has completed. (Prefer that you use a Promise)
// Separate those two functions into separate files and call one of them using node

// let dbz = module.exports = function dbz(){
//     setTimeout(function(){ console.log("Kame"); }, 1000)
//     setTimeout(function(){ console.log("hame"); }, 3000)
// } 

//dbz();

/**
 * Since you call it here this isn't exactly right, i.e. if you comment out dbz() on the line 
 * above it will just print "HAAA!" to resolve this we could use a promise or a callback to 
 * make the other wait I added some code here and on app.js to demo this
 */
/*
const myTimer = () => {
    const promise = new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('Timer done...');
            }, 3000);
        } catch(error) {
            reject('Oh shit everythings on fire...');
        }
    })
    return promise;
}
module.exports = myTimer;
*/



//end





/**
 * I see that you did what I did above this looks A1, nice work
 */
// Promise attempt

// let rateGame = module.exports = function rateGame(gameGood){
//     console.log("Should I Buy This Game?")
//     if(gameGood == true){
//         setTimeout(function(){ console.log('This game is dope! Buy It!'); }, 5000);
//     } else{
//         setTimeout(function(){ console.log('This game is garbage. Do Not Buy!'); }, 5000);
//     }
// }

// rateGame(true);

//end
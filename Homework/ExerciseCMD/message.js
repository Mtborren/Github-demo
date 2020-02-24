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

//

//Exercise Wait Homework

// Create a function that takes some time to execute (You can count to a really high number, or use a setInterval)
// Create a second function that does something once the first function has completed. (Prefer that you use a Promise)
// Separate those two functions into separate files and call one of them using node

// let dbz = module.exports = function dbz(){
//     setTimeout(function(){ console.log("Kame"); }, 1000)
//     setTimeout(function(){ console.log("hame"); }, 3000)
// } 
// dbz();

//end

// Promise


let isTheGameGood = module.exports =  function good(){
    new Promise ((resolve, reject) => {
    if(good = true){
        let gameGood = 'This game is dope!';
        console.log(gameGood);
        resolve(gameGood);
    } else if(good = true){
        let gameBad = 'This is garbage.';
        console.log(gameBad);
        reject(gameBad);
        return gameBad
    }
});
}
isTheGameGood(true);




// function myTimer(){
//     document.getElementById("timer").innerHTML = input;
//     let input = parseInt(document.getElementById("userInput").value);
//     while(!isNaN(input) && input > 0){
//         document.getElementById("timer").innerHTML = input;
//         input--;
//     }
// }





// function myTimer(){          //working code, but doesn't stop at zero.
//     let input = parseInt(document.getElementById("userInput").value);
//     if(!isNaN(input) && input >= 0){
//     setInterval(function(){
//         document.getElementById("timer").innerHTML = input;
//         input--; 
//     }, 1000);
//     } else if(input === 0){
//         document.getElementById("timer").innerHTML = input;
//         console.log("DONE!"); //change to alert once code above is correct
// }
// }


function myTimer(){
    let input = parseInt(document.getElementById("userInput").value);
    setInterval(function(){
        if(!isNaN(input) && input >= 0){
            document.getElementById("timer").innerHTML = input;
            input--;
        } else {
            document.getElementById("timer").innerHTML = "DONE!";
            document.getElementById("timer").style.color = "crimson";
            document.getElementById("timer").style.fontSize = "xx large";
            return;
        }
    }, 1000);
}



// function myTimer(){
//     let input = parseInt(document.getElementById("userInput").value);
//     let int = setInterval(function() {
//         while(!isNaN(input) && input > 0){
//             document.getElementById("timer").innerHTML = input;
//             input--;
            
//         }}, 1000);
//     }







// function myTimer(){
//     let input = parseInt(document.getElementById("userInput"));
//     var int = setInterval(function(){
//         document.getElementById("timer").innerHTML = input;
//         input-- || clearInterval(int);
//     }, 1000);
// }


//First Quiz
//Graded on if code works, how clean it is (having good variables, placing things in an order that makes sense) and overall format.
//Email firstQuiz.js && firstQuiz.html to morgan@thecluhouse.com

//Topics
    //User Input
    //Math
    //Strings
    //Objects
    //Regex(Regular Expression)
    //remember split

//You will be graded on: completeness (did you solve all three problems?), code quality(does your bracket-style make me cry?), and style(did you follow good code practices?)


// Problem 1:
// 	You are going to make a very simple calculator. 
// 	You will create a page with inputs for the user.
// 	You will take two numbers from user input and divide them. 
// 	You will then display that result, with two decimal points. (two numbers after decimal) 
//     Hint: make sure that your user can’t break your calculator

// let num1 = document.getElementById("userInput");
// let how = document.getElementById("userInput2");
// let num2 = document.getElementById("userInput3");
// let ans;

// doMath(){
// let num1 = document.getElementById("userInput");
// let how = document.getElementById("userInput2");
// let num2 = document.getElementById("userInput3");
//     if(num1 && num2 == Number && how == +){
//     alert(num1 + num2);
//     } else if(num1 && num2 == Number && how == -){
//         alert(num1-num2);
//         } else if(num1 && num2 == Number && how == *){
//             alert(num1*num2);
//             } else if(num1 && num2 == Number && how == /){
//                 alert(ans=num1/num2);
//                 } else if(num1 && num2 == Number && how == %){
//                     alert(ans=num1*100/num2);
//                     } else {
//                         alert("Invalid Selection, Please Try Again.");  
//                 }
//             }

//Code doesn't work. still trying to figure out why.
    //I have a feeling it has to do with how i'm identifying which method of math to use, as well as how i'm trying to call for the result.
    //I also saw a much easier answer to this question, but didn't want to use its influence as I couldn't find out how to do so without making my code very similar, so I attempted an alternative approach.

// Problem 2:
// 	You will be proofreading some texts.
// 	Given any string, find the longest word and log the length of that word.
// 	Next, without changing the original array remove any words that are less than four characters, log the removed words, and the text after these changes.
// 	    Bonus: can you show all of this to the user? 

// let string = "This is an extremely cool string."
// let word = 0;
// let ans;

// for(i = 0; i < string.length; i++){
//     if(word < string[i].length){
//         word = string[i].length;
//         ans = string[i];
//     }
// }
// console.log(ans);

// only logs "T" for some reason?
//I may need to have all of these housed inside of a function so that the scope of the variables change.


// let string = ["This", "is", "an", "extremely", "cool", "string"]

// for(i = 0; i < string.length; i++){
//     if(string[i].length < 4){
//         string[i].split("", i);
//         alert(string[i]);
//     } else {
//         string[i].split(i);
//         console.log(string[i]);
//     }
// }

//I have this code set up to alert the user of the words below 4 characters, and login our console the words that remain.

// Problem 3:
// 	You will make a barn object
// 	This object should have three properties(these can be whatever you want i.e. what color is the barn?)
// 	This object should have two methods(what can you do in a barn?)
// 	Use one method to change a property of the object(for example, have a paint barn method and make the barn blue, not red)

// let barn {
//     color = red;
//     size = 1000;
//     type = horse;
//     changeColor = function(){
//         this.color = blue;
//     }
//     barnDescription = function(){
//         return this.color + "barn" + this.size + "sqft" + "for" + this.type;
//     };
// }

//I know this answer isn't very in depth, I honestly wasn't sure what other functions I could create within this object.

// Bonus:
// 	Using regex, let a user make a new password with these requirements:
//         More than 6 characters long
//         Uses at least one number
//         Uses at least one capital letter
//         Password IS NOT “password”

//Honestly not sure how to attempt. Didn't have much free time to work on before time was up on quiz.
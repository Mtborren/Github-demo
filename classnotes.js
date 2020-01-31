// //homework for 01/29/20
// /*
// var irateInteger
// var sassyString 

// irateInteger = 7
// //because  7 8 9
// sassyString = "this string is sassy"

// console.log(irateInteger * sassyString);
// //for this answer I received NaN

// console.log(2 + true);
// //for this answer I received 3.

// console.log(irateInteger + 15);
// //just playing with the math a little.

// console.log(sassyString * sassyString);
// //trying to multiply strings together - ended with NaN

// console.log(sassyString + sassyString);
// //trying to add strings

// console.log(irateInteger + "7");
// //adding strings and integers together

// console.log(true + false);
// //trying things out

// console.log(true - false);

// console.log(true + true);

// console.log(8**2);
// //playing with exponents

// console.log(8**2-60)
// */      









// /*
// //Homework 1/30/20
// //conditional
// var counter

// counter = 2

// console.log(counter + 5); //adding 5 to variable
// console.log((counter + 5) * 2); //i got 14 with this equation

// //I believe 14 modulo 3 will provide me with 2. 3 goes into 14 4 times to make 12 with a remainder of 2.
// console.log(14 % 3);
// //My answer was 2.

// //if I use 2 as my modulo i would receive 0 as my answer as 2 goes into 14 evenly with no remainder.
// console.log(14 % 2);
// //My answer was 0.

// if(counter % 2 == 0){     //if statement showing that if all is true, # will be even if not will not be even
//     console.log("Even");
// } else {
//     console.log("Not Even");
// }

// //conditional statement showing 4 tests


// if(counter > 1 && counter < 3){
//     console.log("Counter equals 2");
// } else if(counter >= 1 && counter <= 3){
//     console.log("Counter may be 1, 2 or 3.");
// } else {
//     console.log("This number is not 1, 2 or 3");
// }


// //3 if statements back to back


// if(counter % 2 === 0){
//     if(counter / counter === 1){
//         if(counter === 2){
//             console.log("This is the only even prime number.");
//         }
//     }
// }

// //loop
// //for loop
// var g;
// for(var g = 100; g < 150; g++){

// }

// //while loop
// var l = 1
// while(l < 50){
//     console.log("add more");
//     l++;
//     l++;    //not sure if this is correct to skip every other but it did count by 2's
// }

// var z = 0
// while(z<100){
//     console.log("fizz")
//     z++;
// }      //return is divisible by 5. answer i got was 100

// //function

// function addThem(a, b){
//     return a + b;
// }

// var result = addThem(5, 10);

// function multiplyThem(a, b){
//     return a * b;
// }

// var answer = multiplyThem(5, 10);

// console.log(result);     //==15
// console.log(answer);     //==50



// var dishes = 15         //attempting to start loop and have count go until dishes are gone

// function washDishes(){
//     while(dishes > 0){
//         console.log("keep washing, almost done!");
//         dishes--;
//     }
// }
// washDishes();

// //trying to create a function with global scoped variables, couldn't get it to operate properly
// /*
// pYr("2018")
// pMa("Honda")
// pMo("Civic")

// function pYr(){
//     console.log("2018");
// } 
// function pMa(){
//     console.log("Honda");
// }
// function pMo(){
//     console.log("Civic");
// }

// function pYr(),pMa(),Pmo(){
//     return pYr + pMa + pMo
// }
// */
// //IIFE function
// /*
// (function(){
//     console.log(prompt("Who's the greatest Avenger?","Tony Stark of course."))
// })();
// */
// //immediate function creating a prompt when ran

// //End Of Homework

// var haveMoney;
// var fastFood;
// var homeMade;
// var type;
// var restaurant;

// haveMoney = true;
// fastFood = false;
// homeMade = "no";
// type = "burger";
// restaurant = "deli";

// if(haveMoney){
//     if(fastFood){
//         if(type === "burgers"){
//             console.log("5guys");
//         }else if(type === "wings"){
//             console.log("ATown");
//         }else {
//             console.log("TopDog");
//         }
//     }
//     if(restaurant){
//         if(type === "buffet"){
//             console.log("Chinese Palace");
//         }else if(type === "steak"){
//             console.log("Outback");
//         }else {
//             console.log("Jason's");
//         }
//     }
// } else {
//     if (homeMade){
//         console.log("go home");
//     }else if (dontWantIt){
//         console.log("Ask Friend");
//     } else {
//         console.log("starve");
//     }
// }

// if(haveMoney){
//   if(fastFood){
//     if(type === "burgers"){
//         console.log("5guys"); 
//       } else if(type === "wings"){
//          console.log("ATown");
//       } else if(type === "salad"){
//          console.log("Topdog");
//       }

//   if(restaurant){
//    if(type === "buffet"){
//        console.log("Chinese");
//      } else if(type === "steak"){
//        console.log("Outback");
//      } else if(type === "deli"){
//        console.log("Jason's");
//      }
   
  
//   } else if(homeMade === "yes"){
//       console.log("go home"); 
//   } else(homeMade === "no"){
//       console.log("starve");
//   } else if(homeMade === "I don't like it"){
//       console.log("ask a friend");
//   }
// }
// }

// var str = "I'm 25.";

// var len = str.length; //=length of index of str variable
// console.log(len);
// //str.charAt[?] will log whichever character is located at the index indicated inside of brackets
// //length will count each character inside string

// console.log(str[0]); //array of [0] = first character in string because javascript counts 0
// console.log(str[1]);

// for(var i = 0; i < str.length; i++) {            //arrays start at 0, so always count 0
//     console.log(str[i]);
// }

// var str = "hello world";

// for(var i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// var upperCaseStr = str.toUpperCase();
// console.log(upperCaseStr);
// console.log(upperCaseStr.toLowerCase());

// // .indexOf('') find index of whatever instance is inside of ()
// // if .indexOf returns -1 it means the index is not located within the search
// // index of returns location of index described instead of returning actual character

// console.log(str.indexOf('e'));

// // indexOf('e') returns 1 because 'e' is the second character in the string, but in java script the string index starts at the first character with a count of 0.

// console.log(str.indexOf('hello'));

// //returns 0

// var str = "hello world";

// if(1 === 2) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if(1 === 1) {
//     if(1 === 2) {
//         console.log('not true'); //example for nested if statements
//     } else {
//         console.log('true');
//     }
// } else if (1 === 2) {
//     console.log("crazy");
// }else {
//     console.log('stuff');
// }

// if(str.includes('hello', 0)) {
//     console.log('included')
// } else {
//     console.log('excluded')
// }

var str = "hello world";
console.log(str.slice(1, str.length));

//slice would pull all values of index between 1 and str.length so result would be 'ello world'


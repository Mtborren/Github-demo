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

//while loop
// var l = 1
// while(l <= 50){
//     console.log(l);
//     l++;
//     l++;    //not sure if this is correct to skip every other but it did count by 2's
// }

// var z = 0
// for(z = 0; z < 100; z++){
//     if(z % 3 === 0 && z % 5 === 0){
//         console.log("fizzbuzz");
//     } else if (z % 3 === 0){
//         console.log("fizz");
//     } else if (z % 5 === 0){
//         console.log("buzz");
//     } else {
//         console.log(z);
//     }
// }

//fixed formula to count to 100 and name each category of # as defined above.

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

// top is not correct for loop # 3, bottom is correct.

// function myProcess(start, end){
//     for(var z = start; z <= end; z++){
//         console.log(z);
//     }
// }
// myProcess(1,4);


// //trying to create a function with global scoped variables, couldn't get it to operate properly
// 


// var pYr = "2018"
// var pMa = "Honda"
// var pMo = "Civic"

// function printYear(year){        
//     console.log(year);
// } function printMake(make){
//     console.log(make);
// }function printModel(model){
//     console.log(model);
// }
// printYear(pYr); 
// printMake(pMa); 
// printModel(pMo);


// //IIFE function
// 
// (function(){
//     console.log(prompt("Who's the greatest Avenger?","Tony Stark of course."))
// })();
// */
//immediate function creating a prompt when ran

// //End Of Homework


                                                                            // 1/31/20 Homework
                                                                            //Exercise Math



// function randomCheck(){
//     let x = document.getElementById('userInput').value;
//     if(x === Math.round(Math.random(1*10))){
//         console.log(alert("You got a Match! Good Guess!"));
//     } else {
//         console.log("Keep Guessing, You Were So Close!");
//     }
// }

    
    // need to write function that takes user input and fact checks against a random number

// End Of Homework

//02/07/20 

//Homework

// Exercise Dom manipulation
    // change styles of 3 separate elements using Javascript
    // change the class name and text of a a child or sibling of each of the above elements

// document.getElementById("opening").innerHTML = "Once upon a time...";
// function myFunc() {
//     document.body.style.backgroundColor = "red";
// }
// function myFunc2() {
//     document.body.style.color = "white";
// }

// function myFunc3() {
//     let divTag = document.getElementById("divTag")
//     let textChange = divTag.childNodes[0];
//     textChange.nodeValue = "Now the story really Begins!"
// }

// function myFunc4() {
//     document.getElementById("divTag").className = "newDiv";
// }

// Exercise event listener
//     add an event listener to an element so that when you click it, another element's style changes.
//     create a list with at least 3 elements
//     apply event delegation to that list of elements

// document.getElementById("opening").addEventListener("click",
// function(){
//     document.body.style.color = "blue";
// })

// document.getElementsByClassName("list").addEventListener("click",
// function(){
//     document.body.style.color = "grey";
// })
//1/31/20

//string method

//let browserType = 'mozilla';
// console.log(browserType.length);

//lost notes due to not being able to open "classnotes.html" in liveServer


                                                                                // 02/03/20

// Today:
//  - we are Behind
//  - fizz buzz review
//  - finish week one 
//  - deploying our first website

// This week:
//  - Py night friday

//  Homework:
//  - 


//  Fizzbuzz review from homework:
// Question:
//  loop from 0 to 100
//  log the string fizz if the number is divisible by 3
//  log the string buzz if the number is divisible by 5
//  log the string fizzbuzz if the number is divisible by both

//my answer(after help)

//var z = 0
// for(z = 0; z < 100; z++){
//     if(z % 3 === 0 && z % 5 === 0){      //could've also use (z % 15 == 0) because 3 and 5 least common multiplier is 15, so using modulo 15 saves code length and makes it easier to read
//         console.log("fizzbuzz");
//     } else if (z % 3 === 0){
//         console.log("fizz");
//     } else if (z % 5 === 0){
//         console.log("buzz");
//     } else {
//         console.log(z);
//     }
// }

                                                                                //Array 

// list of related logical data
// ex of array
// var arr = ["words", 5, 5, 0];   

// var cat = ["jared"]
// var cats = ["fluffy", "bellhop", "fluffy2"]; // use s to make the array seem plural when listing multiple items in array
// index of array starts count at 0, so index for fluffy is 0, index for bellhop is 1, and index for fluffy 2 is 2
// console.log(cats[0];);
// cats.length(); == count of index in array "cats" answer == 3 because count = total count of index's in array, not a location of index inside of array

// var dogs = ["button", "spike", "buddy"];

// for( i = 0; i < dogs.length(); i++){
//     console.log(dogs[i];);
// }
// will break eventually because length would reach outside of actual index count
//.push() - to manipulate last item of array
//.pop() - to manipulate last item of array
// dogs.push("cactus"); pushes(adds to end) name cactus to end of dogs array
// dogs.push("cactus", "pants"); pushes(adds to end) cactus and pants to end of dogs array
// dogs.pop(); pops(deletes) the last item from the array
//dogs.length = "asher" would add asher to end of array because length is always one ahead of index, so assigning to .length adds to the last position in array
// array iteration - going through every part of array

// var clothes = ["shirt", "pants", "dress", "hat"];
// //for each && for in
// const array1 = ['a', 'b', 'c'];
// //don't use ',' at the end item of an array, it will break array as it will expect another item to be at end
// array1.forEach(element => console.log(element));

// //for function you always want to start with unit, then condition, then adjustment

// for(var i = 0; i < clothes.length; i++){    //.length doesn't get () because it is a property
//     console.log(clothes[i]);
//}

// this works as is and will run through each item in index, but changing < to <= would break because it would attempt to reach outside of index count because index list is from 0 - 3 but length is 4.
// if you make an array of one index thats a number it will create and array of undefined elements equal to the number entered to the array

                                                                            //JS Data Types

// String
// integers
// booleans
// objects

//we can check types by using typeof();
// ex console.log(typeof 42); = "number"
// ex console.log(typeof 'blubber'); = "string"
// console.log(typeof true); = boolean

//Casting - to change it from one type to another
//String() - to convert from other type to string type
//Number() - returns a number, converted from its parameter. - are accurate up to 15 digits
    // Number("55"); = 55;
//parseFloat() - parses its argument/parameter and returns a floating point(decimal point) number. I.e - returns exact numbers including decimals
//parseInt() - parses a string and returns a whole number. I.e - returns only whole numbers
    //ignores decimal points I.e 10.8 rounds to 10 when using parseInt

//Number(false/true) returns numbers from boolean. false = 0; true = 1;

//array methods
// - splice 
// - splice
// - concat
// - Find
// - sort
// - reverse
// - split
// - join
// - filter
// - reduce

// shift(); - removes element from beginning of array (opposite of pop)
// unshift(); - adds element to beginning of array (opposite of push)

// split() - takes whole item, element or group of and creates an array of items.
    //i.e one whole pizza being split into 8 slices

// splice() - to cut and rejoin or add new items into existing array.
    //i.e splice(1, 1) means to start at one(index starts at 0), cut one element and rejoin remaining array.
    //i.e splice(1, 0) means to start at one and cut out 0 items, following 0 with values would add values in after starting point.
        //i.e splice(1, 0, "kiwi", "banana") would start at index one, cut out zero items and add in the two new values.
        //i.e splice(1, 1, "kiwi", "banana") would start at index one, cut out one item and add in the two new values.
    // can also be used to join two different arrays or place one array inside of another to create a new altered array.

// slice() - to make a copy of original array, then cut out and create separate arrays for new version of array.
    //i.e slice(1, 3) will cut out whats in between 1, 3 and split into 2 different arrays. however, slice goes up to second parameter but does not include it so end count would be two and stop before 3.
    //doesn't touch source array.

// concat() - to take an array of elements and returns a string of elements.

// sort() - to sort the array to alphabetic order. *Does not work for numbers.

// reverse() - to reverse the order of elements in array.

// reduce() - to reduce entire array into one single output value.
    //does not affect original array, just provides new single output.
    //always processes left to right.
    //const array1 = [1, 2, 3, 4];
    //const reducer = (accumulator, currentValue) => accumulator + currentValue;

        // 1 + 2 + 3 + 4
    //console.log(array1.reduce(reducer));
        //output = 10 


// join() - to join elements in array into single output value.
    //const elements = ['Fire', 'Water', 'Air']
    //console.log(elements.join());
    //output = "Fire,Water,Air"

    //console.log(elements.join(""));
    //output = FireWaterAir

    //console.log(elements.join("-"));
    //output = Fire-Water-Join

// return() - returns value within specific parameter
    // var ages = [32, 33, 16, 40];
    
    // function checkAdult(age) {
    //     return age >= 18;
    // }
    // function myFunction(){

    // }

                                                                            //GitHub


//Git Branch - creates different branches off of original source code to allow new code, testing and ways to collaborate to make changes and get correct results without directly changing the Source.

//git branch - shows which branch you are currently on.
//git checkout - changes which branch you are currently working on.
    //git checkout master moves to master branch.
//git checkout -b - creates new branch to allow new code to br written or tested.
    //nano is how to create new file within location
//git add .
//git commit -m
//git push
//these take new branch that was created and adds it to the repo as a new branch
//pull request will now show in github and give the option to merge the new branch to the master branch and have all changes go into effect.
// after these we can now see branches in git hub, and also shows pull request to merge new local branches to existing master branch. 
    //we can also delete new branches now.


//using github for website creation / testing
//pages.github.com
    //file name is username.github.io


                                                                            //02/04/20//

//Today:
//Fun with website
//HTML basics
//JS Polyfills
//JS coding style
//Testing (What is testing, What is QA, then how to actually write tests)
//Object basics

//This week:
//Py night 6pm - 9pm friday
//Friday guest speaker - Doug from Security Onion Solutions
//Friday will be first quiz

//Homework/Labwork
//Catch up 
//Testing
//If caught up, start working on website (do research/make an outline)

                                                                            //Design

//Websites - We are making personal portfolio for website.
    //Dribbble.com - good place for creative inspiration
    //awwwards.com - "    "     "   "
    //Pinterest.com
    //Figma.com - helpful for creative design
    //color.adobe.com - really helpful for matching color palettes
        //70/20/10 rule - 70% should be main color, 20 % complementary color, 10% accent.

//Freelancing is the goal, need to get firm understanding of development.

                                                                            //HTML Basic Terms

//Elements
//Tags
//Attributes
//HTML document structure
    //html, head, body
//Self closing elements

                                                                            //JS FUN

//ECMAScript
    //board of standards that add rules and syntax to javascript.
    //Languages are constantly evolving so new standards are introduced to keep the language uniform and working.  
        //ECMAScript and TypeScript are not the same. Type script is a different syntax and ruled way of using JS.

//Polyfill - a piece of code used to provide modern functionality on older browsers that do not natively support it.

//Babel is a way to polyfill code for older browser versions.
    //write new clean code in, Babel rewrites into older version of code that works with browser.

//Always write clean code. Keep lines together, Keep functions in order and make sure spacing is uniform.

//Nesting levels    
    //always make sure functions, loops, and all other lines are on appropriate lines within appropriate commands so that code will be read correctly by machine.



                                                                            //02/05/20

//Today:
//Array review
//Testing(what is, q/a, how to write)
//Mocha
//Object basics
//This

//Homework:
//Testing & Objects
//Social Media Cleaning + Create Linked In


//Video Notes
//Arrays

// let selectedColors = ['red', 'blue'];
// console.log(selectedColors);

//index of red is 0, index of blue is 1.

// let selectedColors = ['red', 'blue'];
// console.log(selectedColors[0]);

//logs red, as 0 indicates index 0.


// let selectedColors = ['red', 'blue'];
// selectedColor[2] = 'green';     // this line now indicates that index 2 is assigned to green, and now green will be read in array as index 2.
// console.log(selectedColors[0]); //typing . after selectedColors (ex. selectedColor.) prompts VS code to show all dot methods that can be used in javascript. (like indexOf and length)

//Loops
//For while do while for in
//i = 0 means loop variable
//second condition is a comparison to i
//for (initialExpression; condition; incrementExpression)
//condition means comparison to variable (what needs to be true to keep loop going, once false loop will end)
// for (let i = 0; i < 5; i++){
//     console.log('hello world')
// }

//as long as i is less than 5, hello world will continue to be logged. i++ adds one to i every loop 

//for (let i = 1; i <= 5; i++) {
//     if (i % 2 !== 0) console.log(i);    //to show only odd numbers, use modulo. if numbers remained after being divided by 2 is NOT 0, then the number has to be odd as all even numbers will have remainder of 0.
// }

//also written as 

//for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) console.log(i);    
// }

//Good Resources for learning
    //funfunfunctions(youtube)  *
    //freecodecamp(youtube)     *
    //freeudemyclasses(website)
    //Adam Coder(youtube)
    //computerphile(youtube)
    //Game Maker's Toolkit(youtube) - check out -   *
    //Geekforgeeks(youtube)
    //GoogleChromeDevelopers(youtube)
    //TheCodingChannel(youtube)
    //TheNewBoston(youtube)     *
    //Dev.to(website) - articles about how to understand and thrive with tech

//Good resources for staying up to date with tech news
    //HackerNoon
    //TheNextWeb - informs when classes and info is on sale/free
    //Hackaday - about hard ware hacking

                                                                            //Testing

//QA - means Quality Assurance
    //Automation - writing scripts to test code.
    //Manual - testing code by working with live site to make sure all expected outcomes occur without issue

//Types of testing
    //TDD - Test-Driven Development
        //write a test to determine what would count as a pass or fail, then write code. then test code with preWritten test.

    //BDD - Behavior-Driven Development
        //looking at how the code is behaving, how pages are loading and how aspects are working.

    //Unit Testing
        //Tiny tests for snippets of code.
    
    //Integration Testing
        //test for integrating new code to main code

    //Regression Testing
        //test to see if code works as it did prior to integration into main code.

    //Other types of tests include:
        //System
        //Sanity
        //Smoke
        //Interface
        //Beta/Acceptance

//General Testing Notes for Making Forms
    //Question Protocol: 
        //Every question you ask.
        //Who within your organization uses the answers to each question
        //What they use them for
        //Whether an answer is required or optional
        //If an answer is required, what happens if a user enters any old thing just to get through the form
        //Hint text should be used where users are more likely to make a mistake, like when having to satisfy a comlex set of passwork rules. Error messages should be last resort
    
    //Accessibility Notes
        //Make Fields easy to tap -- 44px height or more is good.

//Be Tolerant of mistakes like extra white space, notes

//Cross-Browser Testing
    //Should be done from beginning of development so that errors wont rise when trying to load to different browser.

//Mocha
    //Testing framework for javasript running on node.js and in the browser.
    //install npm before able to install mocha
    //we can write unit tests using mocha

//things we havent used in code

//-Require the built in 'assertion' library
//var assert = require('assert');
//-create a test suite (group) called Math
// describe('Math', function(){ // describe is what is displayed when testing
//     //-Test one: A string explanation of what we're testing
//     it('should equal to 9', function(){
//         //-out actual test: 3*3 should be 9.
//         assert.equal(9, 3*3); //9 is condition, 3*3 is whats being tested
//     });
//     //-test two: a string explanation of what we're testing
//     it('should equal to -8', function(){
//         //-our actual test: (3-4)*8 should equal -8
//         assert.equal(-8, (3-4) * 8);
//     });
// });

//.json
    //java script object notation

//Node
    //node.js is an open source server environment
    //free, runs on various platforms and uses JS on the server (server is a computer that hosts code)

//NPM
    //Node packet manager
    //Software registry

//Open source
    //product of code that you can manipulate exactly how you want or need thats completely free and available to the public.
        //(i.e linux, ubuntu, mozilla, babel, VLC, gimp)

//Test Practice

//function
//find area of triangle
// calcArea.findAreaTriangle(base, height) = function(){
//     return .5 * base * height               //use return because that is what the function will provide when called below in console log

// }

// // call function, parameters 4 and 5 will replace base and height in actual function.
// console.log(findAreaTriangle(4, 5));

//returns 10

//test for function

// let calcArea = require('index.js'); //add this to function to assign value in test
// let assert = require('assert');
// describe('Area Calculations', function(){
//     it('area of triangle with b-10 and h-5 should be 25', function(){
//         assert.equal(25, calcArea.findAreaTriangle(10, 5));
//     });
// });




















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

//let i = {}; is how you define an java script object



//02/06/20

//JS Object Basics

//var person = {}; //this is an empty object. it would be the same as var name = " ";

//we can house functions inside of objects, these then become methods.

//name: "Susan", 

//work: function(){
    //-content
//}

// //Can be written like this
//     var person = {
//         name: "susan",
//         age: 57,
//         work: function(){
//         },  // use comma to seperate object properties, semi colon is used to close out end of object
//         sleepy: function(){

//         } //leave comma out because its the last item in object
//     };

//function() = anonymous function, a function that operates without a name

// var math = {
//     PI: 3.14,
//     Eulers: 2.71,
//     round: function(){
//         //function 
//     }
// }

// math.round(); //calls object math, and searches until it finds function named round();

//assert. is a node object located within a built in library.

// var <object name> = {
//     -properties
//     <key>: <value>,  //key value pair, assigns a thing, string, variable, whatever to a value.
//     -methods
//     <'key' function name>: <'value' function compostion>,
// };
//kind of functions as dictionary. it dictates definition or value to key property.

//80% of computer science is based on object based languages.

//dot notation

//var myCar = new Object();
//myCar.make = 'Ford'
//myCar.model = 'Mustang'
//myCar.color;
//console.log(myCar.make);      //console.log is a dot notation
//console.log(myCar.color)

//bracket notation

//myCar['year'] = 1969;
// console.log(myCar['model'])

// myCar['Do I like?'] = "I hate my car.";     //Do not use bracket notation unless needed. dot notation is easier to understand, write and read.
// console.log(myCar['Do I like?']);
//  
//myCar.likability = "I hate my car.";
//console.log(myCar.likability);

//function showProps(obj, objName) {
//     var result = "";
//     for (var i in obj) {    // var i in obj means that for every i(property) in object, do the following function
//         if (obj.hasOwnProperty(i)) {
//             result += objName + "." + i + "=" = obj[i] + "/n"   // /n means new line for each log inside new object
//         }
//     }
// };

// function print(obj, objName){
//     for(var value in Math){
//         console.log("beep");
//         var result="";
//         result += "key" + value + "Value" + Math.value;
//         console.log(Math.value);
//     }
// }
// print(Math, "Math");

//*doesn't work, math object doesn't exist until run time(time of execution on browser)

//Watch Crash course Data structures on youtube

                                                                                            //Global Scope & Local Scope
                                                                                              //Code pen - object basics (Morgan's Code)


// name spacing- js defaults to global so we can use some fancy things to avoid issues
// literal syntax- fancy key value pairs
// method definition- A JavaScript method is a property containing a function definition
// value storage- look at the literal syntax
// value accessing - access those values
// for key in object- more loops brother
// */

//READ THROUGH \/

//name spacing - using objects and local scope to make sure they dont override each other
//Single global variables
// var myApplication =  (function () { 
//     function funOne(){
//         //...
//     }
//     return{
//         //...
//     }
// })();   //means immediately invoking notation
// //Prefix namespacing
// var myApplication_propertyA = {};
// var myApplication_propertyB = {};
// function myApplication_myMethod(){ 
// console.log("hello");
// }
// //Object literal notation
// var myApplication = {

// // As we've seen, we can easily define functionality for
// // this object literal..
// getInfo:function(){ 
//   //...
// },

// // but we can also populate it to support 
// // further object namespaces containing anything
// // anything we wish:
// models : {},
// views : {
//     pages : {}
// },
// collections : {}
// };
// //Nested namespacing
// var myApp =  myApp || {};

// // perform a similar existence check when defining nested 
// // children
// myApp.routers = myApp.routers || {};
// myApp.model = myApp.model || {};
// myApp.model.special = myApp.model.special || {};
// //Immediately-invoked Function
// // an (anonymous) immediately-invoked function expression
// (function () { /*...*/})();

// // a named immediately-invoked function expression
// (function foobar () { /*..*/}());

// // this is technically a self-executing function which is quite different
// function foobar () { foobar(); }
// //Expressions

// //Namespace injection
// var myApp = myApp || {};
// myApp.utils =  {};

// (function () {
// var val = 5;

// this.getValue = function () {
//   return val;
// };

// this.setValue = function( newVal ) {
//   val = newVal;
// }
  
// // also introduce a new sub-namespace
// this.tools = {};

// }).apply( myApp.utils );  

// // inject new behaviour into the tools namespace
// // which we defined via the utilities module

// (function () {
// this.diagnose = function(){
//     return "diagnosis";   
// }
// }).apply( myApp.utils.tools );

// // note, this same approach to extension could be applied
// // to a regular IIFE, by just passing in the context as 
// // an argument and modifying the context rather than just
// // "this"

// // Usage:

// // Outputs our populated namespace
// console.log( myApp );

// // Outputs: 5
// console.log( myApp.utils.getValue() );

// // Sets the value of `val` and returns it
// myApp.utils.setValue( 25 ); 
// console.log( myApp.utils.getValue() );

// // Testing another level down
// console.log( myApp.utils.tools.diagnose() );


// //Literal Syntax

// var myObject ={
// myProperty : "value",
// yourProperty : "value",
// myMethod : function(){
//   //code here
// },
// yourMethod : function(){
//   //more code
// }
// }

// //value accessing
// console.log(myObject.myProperty);

// //for key in object
// for (var key in myObject) {
// // skip loop if the property is from prototype
// if (!myObject.hasOwnProperty(key)) continue;

// var obj = myObject[key];
// for (var prop in obj) {
//     // skip loop if the property is from prototype
//     if (!obj.hasOwnProperty(prop)) continue;

//     // your code
//     //alert(prop + " = " + obj[prop]);
// }
// };



//THIS

//What is this

// function Car(make, model, year) {
//     this.make = make;   //using this, we can now use NEW to assign a lot of info
//     this.model = model;
//     this.year = year;
// }
//     //kind of like a blueprint, also known as a constructor
//         //we use this blueprint so that when we have new cars to push into function, we dont have to rewrite function, just change actual var in log.

// var car1 = new Car('Eagle', 'Talon TSi', 1993);
// console.log(car1.make); //(this"car1".make is equal to this.make since our new variable we've created is car1)
    //logs: Eagle since the make of var car 1 is Eagle.
    // if we only placed Car inside of the log, it would've printed Eagle, Talon TSi, 1993
    //the physical item made from blueprint

//This

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function(){
//         return this.firstName + " " + this.lastName;         //when scoped locally, it knows we are referring to the person object above for this this. statement //+ " " + means to add space in between logs
//     }
// }

// console.log(person.fullName());
// console.log(this.firstName);


//Concept of Dry
    //Don't Repeat Yourself
        //waste of time to write same code several times
        //if you need to update something, using one code to run multiple tasks means you only have to update one code and not several for each task.

//Bind uses arrays to merge

// let c1 = {
//     z: 30,
//     y:20
// }

// let c2 = {
//     z: 14,
//     y: 67
// }

// function print() {
//     console.log(z + " , " + y);
// }

// let c1print = print.bind(c1);
// let c2print = print.bind(c2);

// //call and apply uses individual parameters

// var obj = {name:"Tyler"};

// var greeting = function(a,b,c){
//     return "welcome" + this.name + "to" + a + " " + b + "in" + c;
// };

// console.log(greeting.call(obj, "Augusta", "GA", "America!"));
// var obj = {name:"Morgan"};
// var greeting = function(a,b,c){
//     return "welcome" = this.name = "to" + a + " " + b + " in " + c;
// };

//Primitive data types in Javascript
    //String
    //Number
    //Boolean
    //Null
    //Undefined


//Homework 02/06/20

//test each function from last week's app using mocha
//update variables and functions to better names following code quality principles we have talked about
//see if you can turn any functions into methods of objects

//API
    //Application programming interface
        //A way to reference someone elses code

//DOM
    //Document Object Model
        //what gets rendered in window with html & css code

// look up HTML document tree to understand flow of HTML document - where to place tags in which area.

                                                            //02/07/20

//http://web.simmons.edu/~grabiner/comm244/weekfour/document-tree.html
//good resource to reference for html layout
//ex
//<!doctype>
    //<html>
        //<head>
            //title
            //meta "meta data is like time, date, place and tagged people for a photo - photo being normal data, all other info about photo being meta data"
            //links
            //style
            //scripts
        //<body>
            //header
                //nav class
                            //} parent/child relationship
                    //button
                    //list
                        //ul - unordered list
                            //li - list items
            //main
            //footer
                //div 
                    //dl - descriptive list
                        //dt
                        //dd
                    //ul - unordered list
                        //li - list items
                            //} sibling relationship
                        //li
            //scripts

//ID
    //Unique names that can only be used once
//Class
    //ways to group items together to keep changes uniform

//Shadowrun template

// <head>
//   <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
//   <link href="main.css" rel="stylesheet">
// </head>

// <body>
//   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//     <a class="navbar-brand" href="/homepage.html">Home</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div class="navbar-nav">
//         <a class="nav-item nav-link active" href="/info.html">Information <span class="sr-only">(current)</span></a>
//       </div>
//     </div>
//   </nav>
//   <div class="topContainer">
    
//   </div>
// </body>

//classwork

{/* <head>  //root
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link href="main.css" rel="stylesheet">
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/homepage.html">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="/info.html">Information <span class="sr-only">(current)</span></a>
      </div>
    </div>
  </nav>
  <div class="topContainer">
    <h1 id ="title">Hello</h1>
    <ul id ="listOne">
        <li>"This is a list"</li>   //leaves
        <li>"This is a list"</li>
    </ul>
  </div>
</body> */}

//parentNode
//childNodes[nodeNumber]
//firstChild
//lastChild
//nextSibling
//previousSibling

//document.write(); - do not use after page is loaded, it will overwrite entire page.

//addEventListener - changes that happen for the user while they are navigating
    //events that occur after certain actions have been taken.
    //types of events
        //onload
        //onunload
        //onchange - "how you can change text to one case type to validate passwords or other info"
        //onmousedown - when you click down
        //onmouseup - when you release click
        //onclick
        //onfocus - highlights fields when active inside them

//can use .addEventListener("click", displayDate);

//Event propagation
    //how user interactions (clicks, page etc) travel through the DOM to get handled
    //Bubbling
        //to bubble info back up to the top, like form data after being filled and submitted (inside out)
    //Capturing
        //to capture new info from outside in to deeper levels, like to make sure all areas of form are filled before allowing option to submit (outside in)
//Event delegation
    //once event has been captured, pass task off to parent element

//JS form validation
    //goal is to kick out errors and bad data before it reaches server

    //regex - "regular expression" - creates a pattern the computer can understand to search for things
    //string validation - ensuring string consists of all letters and not integers

    //keep server clean and your site will stay clean, secure and responsive.

//JS timing
    //setTimeout(function, milliseconds) - will run for specific time (log out after 10 minutes)
    //setInterval(function, milliseconds) - will run until not able to
        //1000 milliseconds in 1 second
    //requestAnimationFrame - CSS - animation for loading screens 

//JS AJAX - Asynchronous Javascript and XML
    //allows for pages to constantly receive new info without having to refresh site.
    //XML - extensible markup language - standard way of writing to ensure understanding from other machines
    //status codes
    //GET
        //used to get information from the server
        //ie youtube, pandora every file pulled and played started with a GET request
        //ie logging in, requesting to see if info is match and gain entrance
    //HTTP(S) - hyper test transfer protocol (secure)
        //status codes for errors
        //1xx - informational
        //2xx - success
            //200 - ok
        //3xx - redirection
            //301 - redirect
        //4xx - client error
            //400 - bad request
            //403 - forbidden
            //404 - missing content
        //5xx - server error
    //XHR - XML HTTP request
        //I want XML and I want a status
    //States
        //readyState
            //How things happen - when XHR processes, what it actually does
    //response text

//URL - uniform resource location
    //google.com
    //google - domain
    //.com - commercial domain

//JSON
    //JS object notation

    //Parse - takes string and turns into JSON object
    //stringify - takes info and turns into string

//HOMEWORK
//Exercise DOM manipulation
//Exercise Event listener

//Quiz monday on arrays and functions!!! study this weekend

                                                                            //02/10/20
//Today:    
    //CSS terms and basics
    //HTML basics
    //JS review

//This Week:
    //Code review Wednesday
    //Beer and Bytes Wednesday
    //Sharon from Parsons will be our guest speaker on Friday!

//Homework/Labwork:
    //JS Quiz

//CSS Basics - Cascading Style Sheet
    //Not technically a programming language, more of a design language
//Self closing tags - tags ending with / are self closing and don't require another tag on the end of content to close.

//ex
//p (selector) {
    //color("property" what we're changing): red("value" what its being changed to);
//} this is called a declaration.

//pseudo selector
    //:link
         //:active
         //:visited
         //:hover
    //:structure
        //:first-of-type
        //:last-of-type
        //:nth-of-type
        //:only-of-type
        //etc

//selector:pseudo-class {
    //property: value;
//}
//pseudo-classes are assigned after the selector because they change the way the element functions, not just how it looks.

//:: indicate not a pseudo selector, but a pseudo element that alters what comes before or after.

//<a href> is an anchored link that is clickable on your site.
//<link href> is read by site as an imbued file and automatically gathers the resources from these links.

//CDN - Content Distribution Network
    //like npm's for CSS

//User Agent Style Sheet
    //how the website preDetermines it should be formatted. should be disregarded if you have good enough code format.

//<Div>
    //pushes content down

//<Span>
    //lets content stay in line

//Headings
    //listed h1 - h6 in order from biggest to smallest.

//Italics - <i></i> - placed around whatever or text word you want to emphasize.

//Bold - <strong></strong> - placed around whatever word or text you want to emphasize.


//Current Standard of HTML
    //HTML5
        //Newest features - Header, Nav, Article, Section, Footer, Aside.











//QUIZ REVIEW
    //Math(object)
        //When using math functions, the math operator is always capitol.

    //if(input == 0){
    //}

    //Order of operations

    //return - what the value will be returned out to
        //return sum of (a,b) - placed in function
            //then you can just console.log the function name and gather the result

    //String(object)
        //length
        //toUpperCase - toLowerCase
        //indexOf
            //[ ] accessor
        //startsWith - endWith
        //includes
        //slice


    //JS Array Methods

    // var arr = [0, 7, 6, 27];

    // for ( var i = 0; i < arr.length; i++){  //var i = 0 sets up our loop to start at 0 and log whatever is there, and as long as the next is true, add one to i because of i++
    //     arr[i] == arr[i] + 5;
    // }
    // console.log(arr);

    // var arr = [0, 7, 6, 27];

    // for ( var i = 0; i < arr.length; i++){
    //     arr[i] == arr[i] + 5;
    //     if(i = arr.length -1){
    //         console.log(arr[i]);
    //     }
    // }
    // console.log(arr);

    //Objects
        //object literal syntax
        // var factory = {
        //     //properties
        //     location: "address",
        //     capacity: 100,
        //     //functions within object is knows as method
        //     makeStuff: function () {
        //         //do code
        //     }
        // }

    //     //Object Problem - bakery franchise 
    //     function bakery (...) {
    //         this.location = location,
    //         this.sqFt = sqFt,
    //         this.employeeCount = employeeCount,
    //         this.isVegan = isVegan,
    //         bake: function(typeOfGoods) {
    //             //some code
    //         }
    //         sell: function(typeOfGoods){
    //             //some code
    //         }
    //     }

    //     bakery.bake("bagels");  //Function call. calls on function bakery to run function bake and the type of goods is "bagels".

    //     var bakeShop = new bakery("address", 100, 1, false) // this will result in a new object that will gain its values from the original object.
    //     var cookieTown = new bakery("address")

    //     bakeShop.bake("cake");

    //     //factory.location - how you locate and return locations value within factory object
    
    // //Regex - regular expressions used to validate input

    // //userInput
    //     //input tag
    //         //<input id="userInput">Title</input>
    //         //TRY USING TEXT CONTENT TYPE ON GROCERY APP
    //         //console.log(document.getElementById("userInput").textContent);
    //         function (printText) {

    //         }

                                            //02/11/20

//Today:
    //More HTML concepts
    //More CSS concepts
    //More CSS colors
    //Hex/Binary number bases

//This week:
    //Sumo Robots today
    //Code Review Wednesday
    //Beer&Bytes Wednesday @ 6pm
    //Sharon from Parsons will be our guest speaker.
    //Friday laser training

//Homework/Labwork:
    //Catch up on week 1 & 2's homework.
    //If finished, add CSS to personal website project.
        //Needs to be clean, personalized, functional and creative.
            //As well as abide by color theory.

//CSS & HTML
//Paths
    //Relative path - used when linking to a different page within the same URL 
        //<a href = "/week04/week4.md"></a>
    //Absolute path - used when linking to a new web address entirely.
        //<a href="google.com"></a>
    //With path links, you can link things other than URL's, such as images, videos or other files
        //<a href="/photos/dog">
        //<img src="excitedDog1.jpg"></a>

//Internal/External links
    //External - <a href="google.com" target="_blank"></a> - target="blank" will cause this link to open in a new tab.
    //Internal - create Id's for each section, then use <a> to anchor the id to each group.
        // way2tutorial.com/html/snippet_editor/file=a_tag_internal_link - resource to show internal links

//CSS
    //Tags/Types
    //Classes
    //ID's

//What - HTML - CSS - Specificity
    //Type(tags) - <p></p>&&<div></div> - p{...} div{...} - lowest level #3 (internal styles overwrite everything!) ex. <p style="color:red"></p> overwrites everything within the p tag because its most tightly scoped.
    //ID - id="paragraph1" || id="bunchOfCats" (unique ID's, only to be used once to change something specific without affecting rest of style sheet) - #paragraph1{...} #bunchOfCats{...} - highest level of specificity #1
    //Class - class="redText" class="lists" - .redText{...} .lists{...} - medium level of specificity #2

    //Cheat (probably shouldnt use, but if needed its available.)
        //!important - use to force class and id's to assign changes that wont be overwrote.
            //p{color:red !important;}

    //EX.
        // <p id="opening" class="paragraphs">
        //     content
        // </p>
        //This means this paragraph will receive all changes from class, but will take id changes last because it is a unique tag.

    //tags can have multiple classes.

//COLOR
    //RGB - Red Blue Green
        //colors are produced by home much of each color is presented in each shade.
        //color# are ranged from 0 - 255.
        //so red would be (255, 0, 0)
        //(0, 0, 0) - would be black.
        //(255, 255, 255) - would result in white.
    //HSL - hue saturation and lightness
        //(0-360, 0%-100%, 0%-100%)
    //you can also just type the color you want to preset number value.
        //IE red, blue, green, yellow, teal
    
    //RGBA
        //A=Alpha channel. allows for transparency and opaqueness.
        //Wrote as red(255, 0, 0, 0.2) - 0.2 dictates how transparent the color will be.
    //HSLA
        //Same concept as about RGBA
        //Wrote as (0-360, 0-100%, 0-100%, 0.0-1.0)
    
    //Color bases

    //Decimal system
        //10^0 = 0
        //10^1 = 10
        //10^2 = 100
    
    //Binary
        //2^0 = 1
        //2^1 = 2
        //2^2 = 4
        //2^3 = 8
            //each position = bit
            //each group of 8 bits = byte
            //in binary, 90 = 
            //128 - 64 - 32 - 16 - 8 - 4 - 2 - 1 
            //because 90 is smaller than 128, that position would represent 0.
            //because 64 is less than 90, subtract the 2, place a 1 over 64, and keep going to get full binary representation.
            // 0  -  1 -  0 -  1 - 1 - 0 - 1 - 0 = 90 = (64+16+8+2);

            //128 - 64 - 32 - 16 - 8 - 4 - 2 - 1 

        //ex.
            //10011001
            // 1  - 0  - 0  - 1  - 1 - 0 - 0 - 1
            //128 - 64 - 32 - 16 - 8 - 4 - 2 - 1
            //answer is 153. 128 + 16 + 8 + 1

    //Hexadecimal - 6 characters used to identify (hexa = 6)
        //Base 16
        //only one character per space as shown about in binary example.
        //because binary only allows integers 0-9, the following characters to reach 16 will be represented by letters.
        //0-1-2-3-4-5-6-7-8-9-a-b-c-d-e-f
        //f = maximum value, so if all f's (#FFFFFF) = white, all 0's (#000000)= black.
            //if all numbers are same in color, you can shorten the code by only using 3 characters, the computer will fill in the blanks.
            //Always make sure things are high enough contrast! Being able to read and view content easily is key.

    //CSS Lengths
        //Absolute lengths (will not directly adjust or resize to show on other platforms(such as mobile or other browsers))(not recommended because you want all images and text blocks to scale according to device or browser being used.)
            //Pixels - an exact amount of pixels for the length, no matter the device.
            //Centimeters/millimeters
            //inches
            //points
            //picas
        //Relative lengths
            //em - relative to font size of the element. (2em means 2 times the size of the current font)
            //ex - (relative to x height of current font)
            //ch - relative to width of the "0"
            //rem - relative to font size of root element
            //vw - relative to 1% of the width of the viewport

            
            //vh - relative to 1% of the height of the viewport
            //vmin - relative to 1% of viewports smaller dimension
            //vmax - relative to 1% of viewports larger dimension
            //% - relative to the parent element

    //HTML Box Model
        //https://www.codecademy.com/articles/f1-devtools-box-model

        //Content
            //Padding - padding: 10px; area inside of border
            //Border - border:1px solid red; area around content
            //Margin - margin: 100px; - area in between other groups of content

            //border-radius - rounds border around content.
            //background:url("img url") creates a background image for inside the border

//02/12/20

//Today:
    //Finish box model section
    //Positioning
    //Typography

//Homework:
    //Exercise Web Page (githubWebsiteRepo)
    //Exercise links and Style
    //Exercise Aside
    

    //HTML box model (cont.)
        //Display
            //None - removes content from view
            //hidden - hides content
            //Block - block elements push things down (top and bottom - like a page break) - resizable so we can adjust dimensions (div)
            //Inline - inline elements are in line. (side by side) - (span)
            //Inline-Block - inline blocks are resizable and are inline (side by side) and not blocked together
                //Have to specify in CSS

    //CSS Positioning
        //Floats - moves content away from other content to keep things in position
            //float: left, right, none & inherit
            //img{float: left} would render image to the left on the content on the page
            //float none is default
            //float inherit means the tag being floated will receive whatever positioning the parent tag has
        //clearing - moves content away from floated content so it can be on a separate position
            //match floats and clears, if float left - clear left.
        //overflow
            //places content and elements together
            //overflow: auto
        //containing
            //:before - how to contain layout before rest of code is applied
            //:after - makes sure after content is done it wont shift after
        //inline-block
        //static
            //default
        //relative
            //is positioned relative to its normal position. so if relative: 33px, it would move 33px from normal position
        //absolute
            //like fixed, but in relation to parent element
        //fixed
            //means element will stay fixed on screen no matter where the user scrolls
        //sticky 
            //means it will catch elements as you scroll and keep on screen until you scroll back to original position, then it will return until scrolled passed again.

    //CSS Typography
        //typeface vs font
            //font is made up of size, weight, style, serif and sans serif.
                //ex. p{
                //   font-family: "Times New Roman", time, serif;
                //}
            //typeface is a group of fonts that share an overall design
        //color
            //color - changes text color
            //backgroundColor - changes background color
        //font properties
            //font-family
            //font-size
            //font-style
            //font-variant
            //font-weight
            //line-height
        //text properties
            //text-align
                //right, left, center
            //text-decoration
            //text-indent 
            //text-shadow: 1px(thick) 3px(away): blue; (color of shadow)
            //text-transform
                //upper case, lower case or capitalize everything
        //web safe fonts
            //fonts.google.com
            //dafont.com - much more difficult to use than google.
            //the more fonts you add to your site, the slower your site will become.
        //web fonts
        //citations & quotes
            //blockquotes <blockquote></blockquote> - places quote in block
            //quotes <q></q> - places content in quotations
            //cites <cite></cite> - correctly formats quote to include citation

    //CSS Backgrounds & gradients
        //background-color = changes background color
        //background = .className(url);
            //background changes background to image based on url
        //gradients
            //css gradient generator(colorzilla.com)
                //automatically creates gradient path for code
        //background-size
            //cover
            //contain

    //HTML lists
        //unordered lists <ul></ul>
            //gets bullet points
        //ordered lists <ol></ol>
            //gets numbers for items
        //description lists <dl></dl>
            //<dt></dt> - titles
            //<dd></dd> - description
        //nesting lists
        //list item stylings
            //list-style-type

    //HTML/CSS adding media
        //images
            //supported image formats (gif, jpg, png) - jpg is standard - gifs are low quality and small - png are high quality and very large
            //background-image vs img tag - different placement options for background. creating image tag sets image into its own area
            //lossless - lossy - after compression lossless(png) means you will not notice a difference, lossy means it will be close but you will see a difference in the files.
        //audio
        //video
        //inline frames
            //i-frame - creates their own window - a way to host content without using your site to host it.
                //how you can add youtube videos to your website.
        //figure
            //text book method to add image
        //caption  
            //text book method to add caption to image
    
    //HTML form
        //form tag - for submitting information
            //method
            //action
        //input types
            //text
            //color
            //email
            //range
            //time
            //date
            //month
            //search
            //url
            //dateTime
            //number
            //tel
            //week
        //textArea
            //name - describe whats going on
        //multiple choice
            //radio - used when only choosing one option
            //checkbox - used when choosing multiple options
        //drop down list
            //select > option
        //submit button - must be inside form to work
        //hidden input
        //form organization
            //label
                //for
            //fieldset - separates form groups into own box to seperate from rest of page
                //legend
        //placeholder - creates transparent text inside input field that clears when typed over
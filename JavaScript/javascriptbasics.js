// this is Single-line Comment

/*
 this is 
 Multi-line Comment
*/

/*
  variable
  1. global variable
  2. local variable
*/

var a = 45; // this is  global variable

function vari() {
  let b = 52; // this is local variable
}

/*
  Javascript Data Types

  JavaScript is a dynamic type language, means you don't need to 
  specify type of the variable because it is dynamically used by JavaScript engine.

  1. Primitive data type (>>String, Number, Boolen, Undefind, Null<<)

  2. Non-primitive (reference) data type(>>object, Array, RegExp<<)

*/

let x; // Now x is undefined
x = 5; // Now x is a Number
x = "John"; // Now x is a String

x = 16 + 4 + "car"; // result == 20car

let answer1 = "It's alright"; // Single quote inside double quotes
let answer2 = "He is called 'Johnny'"; // Single quotes inside double quotes
let answer3 = 'He is called "Johnny"'; // Double quotes inside single quotes

const cars = ["Saab", "Volvo", "BMW"]; // Arrays

/*
    keywords
    1. let  >>>>>>> let keyword in JavaScript: The let keyword is an improved version of the var keyword. 
    2. var
    3. const >>>>>>>The const keyword has all the properties that are the same as the let keyword,
     except the user "*cannot update*" it.
    

     1.let
        >>The scope of a let variable is block scope.
        >>It can be updated but cannot be re-declared into the scope.
        >>It can be declared without initialization.
        >>It cannot be accessed without initialization otherwise it will give ‘referenceError’.
        >>Hoisting is done , but not initialized (this is the reason for error when we access 
            the let variable before declaration/initialization

     2. var 
        >>The scope of a var variable is functional scope.
        >>It can be updated and re-declared into the scope.
        >>It can be declared without initialization.
        >>It can be accessed without initialization as its default value is “undefined”.
        >>hoisting done , with initializing as ‘default’ value
        
     3.const
        >>The scope of a const variable is block scope.
        >>It cannot be updated or re-declared into the scope.
        >>It cannot be declared without initialization.
        >>It cannot be accessed without initialization, as it cannot be declared without initialization.
        >>Hoisting is done, but not initialized (this is the reason for error when we access the const 
            variable before declaration/initialization
    */

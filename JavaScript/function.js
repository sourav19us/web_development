// function in javascript

/*
    Advantage of JavaScript function
    1.code resuability
    2.less coding
*/

// function without argument

function msg() {
  window.alert("msg function call");
}
document.write(msg());

// funtion with argument

function sum(a, b, c) {
  window.alert("a+b+c=" + (a + b + c));
  return a + b + c;
}
document.write(sum(5, 6, 10));

// function object

let add = new Function("num1", "num2", "return num1+num2");

document.write(add(5, 12));

/*
javascript function methods
apply()     =	    It is used to call a function contains this value and a single array of arguments.
bind()	    =       It is used to create a new function.
call()	    =       It is used to call a function contains this value and an argument list.
toString()  =	    It returns the result in a form of a string.
*/

document.write(sum(15, 6, 10));
window.alert("this web for function");

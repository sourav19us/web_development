// JavaScript Polymorphism
/*
 The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a 
 single action in different forms. It provides an ability to call the same method on different JavaScript
 objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods.
 */

class A {
  display() {
    document.writeln("A is invoked<br>");
  }
}
class B extends A {
  display() {
    document.writeln("B is invoked");
  }
}

var a = [new A(), new B()];
a.forEach(function (msg) {
  msg.display();
});

// Let's see the same example with prototype-based approach.

function A() {}
A.prototype.display = function () {
  return "A is invoked";
};
function B() {}

B.prototype = Object.create(A.prototype);

var a = [new A(), new B()];

a.forEach(function (msg) {
  document.writeln(msg.display() + "<br>");
});

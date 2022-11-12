// JavaScript Inheritance

/*
 It provides flexibility to the child class to reuse the methods and variables of a parent class.

    Points to remember
    1.It maintains an IS-A relationship.
    2.The extends keyword is used in class expressions or class declarations.
    3.Using extends keyword, we can acquire all the properties and behavior of the inbuilt 
      bject as well as custom classes.
    4.We can also use a prototype-based approach to achieve inheritance.

*/

//The "super" keyword is used to call the parent class constructor. Let's see an example.

class parant {
  constructor() {
    this.company = "soni";
  }
}

class child extends parant {
  constructor(name, price) {
    super();
    this.name = name;
    this.price = price;
  }
}

let obj = new child("soni", 10e4);

document.writeln(obj.company + " " + obj.name + " " + obj.price);

// A Prototype-based approach
// In this approach, there is no need to use class and extends keywords.

// >>>> function_name.prototype=parent_function_name;
function Bike1(company) {
  this.company = company;
}

Bike1.prototype.getCompany = function () {
  return this.company;
};
//Another constructor function
function Vehicle1(name, price) {
  this.name = name;
  this.price = price;
}
var bike = new Bike1("Honda");
Vehicle1.prototype = bike; //Now Bike treats as a parent of Vehicle.
var vehicle = new Vehicle1("Shine", 70000);
document.writeln(
  vehicle.getCompany() + " " + vehicle.name + " " + vehicle.price
);

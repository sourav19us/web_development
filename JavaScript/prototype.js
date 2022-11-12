// JavaScript Prototype Object

// ClassName.prototype.methodName

/*
    What is the requirement of a prototype object?

    >>> Whenever an object is created in JavaScript, its corresponding functions are loaded into memory.
        So, a new copy of the function is created on each object creation.

        In a prototype-based approach, all the objects share the same function. 
        This ignores the requirement of creating a new copy of function for each object. 
        Thus, the functions are loaded once into the memory.
*/

//Let's see an example to add a new method to the constructor function.

function employee(firstName, lastName) {
  this.firstName = firstName;
  this.lastName - lastName;
}

// prototype object
employee.prototype.fullNmae = function () {
  return this.firstName + " " + this.lastName;
};

let emp1 = new employee("jon", "sonic");
let emp2 = new employee("sourav", "saini");

document.writeln(emp1.fullNmae() + " <br>");
document.writeln(emp2.fullNmae() + " <br>");

// Let's see an example to add a new property to the constructor function.

employee.prototype.company = "javatpoint";

let emp3 = new employee();
document.writeln("company name " + emp3.company);

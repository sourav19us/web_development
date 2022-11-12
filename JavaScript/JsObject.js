/*
    JavaScript Objects
    A javaScript object is an entity having state and behavior (properties and method). 
    For example: car, pen, bike, chair, glass, keyboard, monitor etc.

    Creating Objects in JavaScript
    1.By object literal
    2.By creating instance of Object directly (using new keyword)
    3.By using an object constructor (using new keyword)
*/

// By object literal >>>>  object_name={property1:value1,property2:value2.....propertyN:valueN} <<<<<

window.alert("this is JsObject");

let emp = { id: 1005, name: "ram", salary: "10000" };

document.write(emp.id + " " + emp.name + " " + emp.salary + "<br>");

//  By creating instance of Object >>> var objectname=new Object(); <<<

let emp2 = new Object();

emp2.id = 1006;
emp2.name = "ram";
emp2.salary = 50000;
document.write(emp2.id + " " + emp2.name + " " + emp2.salary + "<br>");

// By using an Object constructor

function emp3(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}

a = new emp3(1008, "sourav", 1000000);

document.write(a.id + " " + a.name + " " + a.salary + "<br>");

// >>>Defining method in JavaScript Object<<<<
function emp4(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
  function changeSalary(otherSalary) {
    this.salary = otherSalary;
  }
}

b = new emp4(1007, "ram", 10000);
b.changeSalary(95820);

document.write(e.id + " " + e.name + " " + e.salary + "<br>");

//  JavaScript Object Methods
/*
1	Object.assign()             This method is used to copy enumerable and own properties from a source object to a target object
2	Object.create()             This method is used to create a new object with the specified prototype object and properties.
3	Object.defineProperty()     This method is used to describe some behavioral attributes of the property.
4	Object.defineProperties()   This method is used to create or configure multiple object properties.
5	Object.entries()            This method returns an array with arrays of the key, value pairs.
6	Object.freeze()             This method prevents existing properties from being removed.
7	Object.getOwnPropertyDescriptor()       This method returns a property descriptor for the specified property of the specified object.
8	Object.getOwnPropertyDescriptors()      This method returns all own property descriptors of a given object.
9	Object.getOwnPropertyNames()            This method returns an array of all properties (enumerable or not) found.
10	Object.getOwnPropertySymbols()          This method returns an array of all own symbol key properties.
11	Object.getPrototypeOf()                 This method returns the prototype of the specified object.
12	Object.is()                             This method determines whether two values are the same value.
13	Object.isExtensible()                   This method determines if an object is extensible
14	Object.isFrozen()                       This method determines if an object was frozen.
15	Object.isSealed()                       This method determines if an object is sealed.
16	Object.keys()                           This method returns an array of a given object's own property names.
17	Object.preventExtensions()              This method is used to prevent any extensions of an object.
18	Object.seal()                           This method prevents new properties from being added and marks all existing properties as non-configurable.
19	Object.setPrototypeOf()                 This method sets the prototype of a specified object to another object.
20	Object.values()                         This method returns an array of values.

*/

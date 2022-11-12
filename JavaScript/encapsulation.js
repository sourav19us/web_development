// JavaScript Encapsulation

/*
    The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions 
    acting on that data. It allows us to control the data and validate it. To achieve an encapsulation 
    in JavaScript: -

       * 1.Use "var" keyword to make data members private.
       * 2.Use setter methods to set the data and getter methods to get that data.

    The encapsulation allows us to handle an object using the following properties:

        1.Read/Write - Here, we use setter methods to write the data and getter methods read that data.

        2.Read Only - In this case, we use getter methods only.

        3.Write Only - In this case, we use setter methods only.    
*/

class test {
  constructor() {
    var name; // use "var" keywoed to make data members private
    var make;
  }

  setName(name) {
    this.name = name;
  }

  getname() {
    return this.name;
  }
  setMake(make) {
    this.make = make;
  }

  getmake() {
    return this.make;
  }
}

let obj = new test();
obj.setName("sourav");
obj.setMake("kumar");
document.writeln("name = " + obj.getname() + "make = " + obj.getmake());

// we perform prototype-based encapsulation.

function test2(name, marks) {
  var s_name = name;
  var s_marks = marks;

  Object.defineProperty(this, "name", {
    get: function () {
      return s_name;
    },
    set: function (s_name) {
      this.s_name = s_name;
    },
  });

  Object.defineProperty(this, "marks", {
    get: function () {
      return s_marks;
    },
    set: function (s_marks) {
      this.s_marks = s_marks;
    },
  });
}

let stud = new test2("jon", 25);
document.writeln(test2.name + " " + test2.marks);

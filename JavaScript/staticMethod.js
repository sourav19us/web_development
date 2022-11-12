// Static Method

/*
    Points to remember
    1.The static keyword is used to declare a static method.
    2.The static method can be of any name.
    3.A class can contain more than one static method.
    4.If we declare more than one static method with a similar name, the JavaScript always invokes the last one.
    5.The static method can be used to create utility functions.
    6.We can use this keyword to call a static method within another static method.
    7.We cannot use this keyword directly to call a static method within the non-static method. In such case, 
      we can call the static method either using the class name or as the property of the constructor.
*/

class test {
  static display1() {
    return "statis display1";
  }
  static display2() {
    return "statis display2 , no1";
  }
  static display2() {
    return "statis display2 , no2";
  }
}

// >>>>> Let's see an example to invoke a static method within the constructor. <<<<<

//  syntax = className.staticMethodName

class test2 {
  constructor() {
    document.writeln(test2.display1()); // <<<<
    document.writeln(this.constructor.display1()); // <<<<
  }
  static display1() {
    return "statis display1";
  }
  static display2() {
    return "statis display2 , no1";
  }
}

// >>>>>>> Let's see an example to invoke a static method within the non-static method. <<<<<

//  syntax = className.staticMethodName

class test3 {
  static display() {
    return "static method is invoked";
  }

  show() {
    document.writeln(test3.display() + "<br>"); // <<<<<<
  }
}

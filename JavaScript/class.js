// JavaScript Classes

// >>>> class Declaration <<<<<<<

class emp {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  get() {
    document.write("id = " + id + " name = " + name + "<br>");
  }
}

let e1 = new emp(105, "jon");
let e2 = new emp(106, "jay");
e1.get();
e2.get();

// Unnamed Class Expression

let emp2 = new (class {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  get() {
    document.write("id = " + id + " name = " + name + "<br>");
  }
})();

let e3 = new emp(105, "jon");
let e4 = new emp(106, "jay");
e3.get();
e4.get();
/*
        *Class Expression Example: Re-declaring Class
        Unlike class declaration, the class expression allows us to re-declare the same class. 
        So, if we try to declare the class more than one time, it throws an error.

        use "var" only
 */

//  Named Class Expression

let emp3 = new (class employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  get() {
    document.write("id = " + id + " name = " + name + "<br>");
  }
})();

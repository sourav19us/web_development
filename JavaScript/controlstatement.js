/*
    If-else control statement

    1.If Statement
    2.If else statement
    3.if else if statement

*/

let a = 10;

if (a >= 10) {
  if ((a = 10)) {
    document.write("a=10");
  } else {
    document.write("a>10");
  }
} else {
  document.write("a<10");
}

let b = 12;

if ((b = 10)) {
  document.write("a=10");
} else if ((b = 8)) {
  document.write("b=8");
} else if ((b = 5)) {
  document.write("b=5");
}

/*
    javascript switch
    
*/

let c = 2;

switch (c) {
  case "1":
    document.write((c = 1));
    break;
  case "2":
    document.write((c = 2));
    break;
  case "3":
    document.write((c = 3));
    break;
  default:
    break;
}

/*
    The break statement "jumps out" of a loop.

    The continue statement "jumps over" one iteration in the loop.
*/

/*
    loops
    1.for loop
    2.while loop
    3.do-while loop
    4.for-in loop (The JavaScript for in loop is used to iterate the properties of an object.)
*/

for (let e = 5; e <= 15; e++) {
  if ((e = 8)) {
    continue;
  }
  if ((e = 12)) {
    break;
  }
  document.write("e = " + e + "<br/>");
}

let g = 10;

while (g <= 20) {
  document.write("g = " + g + "<br/>");
  e++;
}

do {
  document.write("g = " + g + "<br/>");
} while (g >= 20);

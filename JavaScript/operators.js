/*
There are following types of operators in JavaScript.

 1. Arithmetic Operators
 2. Comparison (Relational) Operators
 3. Bitwise Operators
 4. Logical Operators
 5. Assignment Operators
 6. Special Operators 
*/

/*
  1.Arithmetic Operators  
     addition  (+) 
     subtraction (-)
     multiplication (*)
     division (/)
     Modulus (%)
     Increment (++) eg a++
     Decrement (--) eg a--
 */
/*
 2. Comparison Operators
  (==)	Is equal to	
  (===)	Identical (equal and of same type)	
  (!=)	Not equal to	
  (!==)	Not Identical	
  (>)	  Greater than	
  (>=)	Greater than or equal to	
  (<)   Less than	
  (<=)	Less than or equal to
*/

/*
 3. Bitwise Operators
  &	  Bitwise AND	
  |	  Bitwise OR	
  ^	  Bitwise XOR	
  ~	  Bitwise NOT	(~10) = -10
  <<	Bitwise Left Shift	(10<<2) = 40
  >>	Bitwise Right Shift	(10>>2) = 2
  >>>	Bitwise Right Shift with Zero	(10>>>2) = 2   ///When we apply >>> on a positive number, 
  it gives the same output as that of >>. It gives a positive number when we apply >>> on a negative number.
   MSB is replaced by a 0.
*/

/*
  4. Logical Operators
   &&	Logical AND	
   ||	Logical OR	
   !	Logical Not
*/

/*
 5. Assignment Operators
  =	Assign	10+10 = 20
  +=	Add and assign	var 
  -=	Subtract and assign	var 
  *=	Multiply and assign	var 
  /=	Divide and assign	var 
  %=	Modulus and assign
*/

/*
  6.Special Operators
  (?:)	  =  Conditional Operator returns value based on the condition. It is like if-else.
(,)	      =  Comma Operator allows multiple expressions to be evaluated as single statement.
delete	  =  Delete Operator deletes a property from the object.
in	      =  In Operator checks if object has the given property
instanceof=	 checks if the object is an instance of given type
new	      =  creates an instance (object)
typeof	  =  checks the type of object.
void      =	 it discards the expression's return value.
yield	    =  checks what is returned in a generator by the generator's iterator.
*/

let a = 15,
  b = 2;

let c = a << b;
let d = a >> b;

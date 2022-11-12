//  JavaScript Number Object

/*
    JavaScript Number Constants
        MIN_VALUE	        returns the largest minimum value.
        MAX_VALUE	        returns the largest maximum value.
        POSITIVE_INFINITY	returns positive infinity, overflow value.
        NEGATIVE_INFINITY	returns negative infinity, overflow value.
        NaN	                represents "Not a Number" value.
*/

let a = 102;
let b = 102.7;
let c = 102e4;
let e = new Number(15);

/*
    JavaScript Number Methods
        isFinite()	    It determines whether the given value is a finite number.
        isInteger()	    It determines whether the given value is an integer.
        parseFloat()	It converts the given string into a floating point number.
        parseInt()	    It converts the given string into an integer number.
        toExponential()	It returns the string that represents exponential notation of the given number.
        toFixed()	    It returns the string that represents a number with exact digits after a decimal point.
        toPrecision()	It returns the string representing a number of specified precision.
        toString()	    It returns the given number in the form of string.
*/

Number.isInteger(45);
Number.parseInt("45");
a.toString();

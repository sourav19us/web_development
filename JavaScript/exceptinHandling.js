//  Exception Handling in JavaScript

/*
    Types of Errors

    While coding, there can be three types of errors in the code:

        Syntax Error: When a user makes a mistake in the pre-defined syntax of a programming language, 
                      a syntax error may appear.
        Runtime Error: When an error occurs during the execution of the program, such an error is known as 
                       Runtime error. The codes which create runtime errors are known as Exceptions. Thus, 
                       exception handlers are used for handling runtime errors.
        Logical Error: An error which occurs when there is any logical mistake in the program that may not 
                       produce the desired output, and may terminate abnormally. Such an error is known as 
                       Logical error.
*/

/*
    Error Object
        When a runtime error occurs, it creates and throws an Error object. Such an object can be used as a 
        base for the user-defined exceptions too. An error object has two properties:

        1.name: This is an object property that sets or returns an error name.
        2.message: This property returns an error message in the string form.


        Although Error is a generic constructor, there are following standard built-in error types or error 
        constructors beside it:

            1.EvalError: It creates an instance for the error that occurred in the eval(), which is a global
                         function used for evaluating the js string code.
            2.InternalError: It creates an instance when the js engine throws an internal error.
            3.RangeError: It creates an instance for the error that occurs when a numeric variable or 
                          parameter is out of its valid range.
            4.ReferenceError: It creates an instance for the error that occurs when an invalid reference is 
                              de-referenced.
            5.SyntaxError: An instance is created for the syntax error that may occur while parsing the eval().
            6.TypeError: When a variable is not a valid type, an instance is created for such an error.
            7.URIError: An instance is created for the error that occurs when invalid parameters are passed in
                        encodeURI() or decodeURI().
                        

    Exception Handling Statements

    There are following statements that handle if any exception occurs:

    1.throw statements
    2.try…catch statements
    3.try…catch…finally statements.                    

*/

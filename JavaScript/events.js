// JavaScript Events
// The change in the state of an object is known as an Event.

/*

    Mouse events:

        click	    "onclick"	        When mouse click on an element
        mouseover	"onmouseover"       When the cursor of the mouse comes over the element
        mouseout	"onmouseout"	    When the cursor of the mouse leaves an element
        mousedown	"onmousedown"	    When the mouse button is pressed over the element
        mouseup	    "onmouseup"	        When the mouse button is released over the element
        mousemove	"onmousemove"	    When the mouse movement takes place.

    Keyboard events:

        Keydown & Keyup	   "onkeydown & onkeyup"	   When the user press and then release the key


    Form events:

        focus	    "onfocus"	    When the user focuses on an element
        submit	    "onsubmit"	    When the user submits the form
        blur	    "onblur"	    When the focus is away from a form element
        change	    "onchange"	    When the user modifies or changes the value of a form element 


    Window/Document events:
        load	"onload"	    When the browser finishes the loading of the page
        unload	"onunload"	    When the visitor leaves the current webpage, the browser unloads it
        resize	"onresize"	    When the visitor resizes the window of the browser 
     
*/

function eventMsg() {
  const h1tag = document.getElementById("h1tag");
  alert("onclick event run");
  h1tag.style.backgroundColor = "#0000FF";
}

function onmouseoverevent() {
  const h1class = document.getElementById("h1class");
  //   alert("onmouseoverevent event run");
  h1class.style.backgroundColor = "#0000FF";
}

//Keydown Event
//<input type="text" id="input1" onkeydown="keydownevent()"/>

// Load event
// "  <body onload="window.alert('Page successfully loaded');">  "

//  JavaScript addEventListener()

/*
    Syntax :- element.addEventListener(event, function, useCapture);  

    1.event: It is a required parameter. It can be defined as a string that specifies the event's name.

    2.function: It is also a required parameter. It is a JavaScript function
              which responds to the event occur.

    3.useCapture: It is an optional parameter. It is a Boolean type value that specifies whether the event 
                  is executed in the bubbling or capturing phase. Its possible values are true and false. 
                  When it is set to true, the event handler executes in the capturing phase. When it is set
                  to false, the handler executes in the bubbling phase. Its default value is false
*/

const btn = document.getElementById("btn");

btn.addEventListener("click", prag);

function prag() {
  const pra1 = document.getElementById("pra");
  pra1.style.color = "#0000FF";
}

//  JavaScript dblclick event

/*
    In HTML  <element ondblclick = "fun()">  

    In JavaScript      object.ondblclick = function() { myScript };  

    In JavaScript by using the addEventListener() method     object.addEventListener("dblclick", myScript); 

    document.getElementById("para").onclick = function() { fun() };

    document.getElementById("heading").ondblclick = function() { fun() }; 


*/

//  JavaScript onresize event

/*

    The onresize event in JavaScript generally occurs when the window has been resized. To get the size of 
    the window, we can use the JavaScript's window.outerWidth and window.outerHeight events. We can also use 
    the JavaScript's properties such as innerWidth, innerHeight, clientWidth, ClientHeight, offsetWidth, 
    offsetHeight to get the size of an element.

    In HTML           <element onresize = "fun()">
     
    In JavaScript     object.onresize = function() { myScript }; 

    In JavaScript by using the addEventListener() method     object.addEventListener("resize", myScript);
*/

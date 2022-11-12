//  HTML DOM Document querySelector()

/*
    Definition and Usage

        The querySelector() method returns the first element that matches a CSS selector.

        To return all matches (not only the first), use the querySelectorAll() instead.

        Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.
*/

/*
    The Difference Between an HTMLCollection and a NodeList

        A NodeList and an HTMLcollection is very much the same thing.

        Both are array-like collections (lists) of nodes (elements) extracted from a document. 
        The nodes can be accessed by index numbers. The index starts at 0.

        Both have a length property that returns the number of elements in the list (collection).

        An HTMLCollection is a collection of document elements.

        A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

        HTMLCollection items can be accessed by their name, id, or index number.

        NodeList items can only be accessed by their index number.

        An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM,
        the list in the HTMLCollection will also change.

        A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM,
        the list in NodeList will not change.

        The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

        The querySelectorAll() method returns a static NodeList.

        The childNodes property returns a live NodeList.
*/

// Syntax document.querySelector(CSS selectors)

// Get the first <p> element in with class="example":

document.querySelector("p.example"); // p tag that have class = example

// Change the text of the element with id="demo":

document.querySelector("#demo").innerHTML = "Hello World!";

// Select the first <p> element with the parent is a <div> element.

document.querySelector("div > p");

// Select the first <a> element that has a "target" attribute:

document.querySelector("a[target]");

// Select the first <h3> or the first <h4>:

{
  /* <h3>A h3 element</h3> */
  /* <h4>A h4 element</h4> */
}
document.querySelector("h3, h4").style.backgroundColor = "red";

// Select the first <h3> or the first <h4>:

{
  /* <h4>A h4 element</h4> */
  /* <h3>A h3 element</h3> */
}
document.querySelector("h3, h4").style.backgroundColor = "red";

// HTML DOM Document querySelectorAll()

/*
    Definition and Usage

        The querySelectorAll() method returns all elements that matches a CSS selector(s).

        The querySelectorAll() method returns a NodeList.

        The querySelectorAll() method throws a SYNTAX_ERR exception if the selector(s) is invalid


        Syntax:- document.querySelectorAll(CSS selectors)
*/

// Add a background color to the first <p> element:

const nodeList = document.querySelectorAll("p"); // p is tag
nodeList[0].style.backgroundColor = "red";

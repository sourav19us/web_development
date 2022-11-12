// >>>> Document Object Model <<<<<
/*
        write("string")	            writes the given string on the doucment.
        writeln("string")	        writes the given string on the doucment with newline character at the end.
        getElementById()	        returns the element having the given id value.
        getElementsByName()	        returns all the elements having the given name value.
        getElementsByTagName()	    returns all the elements having the given tag name.
        getElementsByClassName()	returns all the elements having the given class name.
*/

function msg() {
  let tag1 = document.getElementById("h1tag").innerText;
  //   let tag = document.getElementById("name").value; // this for input tag .value

  //   alert("h1 tag have " + tag1);
  let tag2 = document.getElementsByClassName("h1class");
  alert("h1 tag no1 have " + tag1 + " " + "h1 tag no2 have " + tag2);
}

/*
    The Differences Between innerHTML, innerText and textContent

        The" innerHTML" property returns:-   The text content of the element, including all spacing and 
                                           inner HTML tags.
        The "innerText" property returns:-   Just the text content of the element and all its children, 
                                           without CSS hidden text spacing and tags, except <script> and 
                                           <style> elements.
        The "textContent" property returns:-   The text content of the element and all descendaces, with 
                                             spacing and CSS hidden text, but without tags.
*/

//   BOM (Browser Object Model)

/*
    1.) >>>>> Window Object <<<<<<
    
    Methods of window object

        alert()	        displays the alert box containing message with ok button.
        confirm()	    displays the confirm dialog box containing message with ok and cancel button.
        prompt()	    displays a dialog box to get input from the user.
        open()	        opens the new window.
        close()	        closes the current window.
        setTimeout()	performs action after specified time like calling function, evaluating expressions etc.

*/

function msgAlert() {
  alert("HELLO Alert Box");
}

// <input type="button" value="click" onclick="msg()"/>

function msgCofirm() {
  let v = confirm("Are u sure?");
  if (v == true) {
    alert("ok");
  } else {
    alert("cancel");
  }
}

function msgPrompt() {
  var v = prompt("Who are you?");
  alert("I am " + v);
}

function msgOpen() {
  open("http://www.javatpoint.com");
}

function msgTimeout() {
  setTimeout(function () {
    alert("Welcome to Javatpoint after 2 seconds");
  }, 2000);
}

/*
    2.) >>>> JavaScript History Object <<<<


    1	forward()	loads the next page.
    2	back()	    loads the previous page.
    3	go()	    loads the given page number.

*/

history.forward(); //for next page
history.back(); //for previous page
history.go(2); //for next 2nd page
history.go(-2); //for previous 2nd page

/*
    3.) >>>> JavaScript Navigator Object <<<<

        1	appName	returns the name
        2	appVersion	returns the version
        3	appCodeName	returns the code name
        4	cookieEnabled	returns true if cookie is enabled otherwise false
        5	userAgent	returns the user agent
        6	language	returns the language. It is supported in Netscape and Firefox only.
        7	userLanguage	returns the user language. It is supported in IE only.
        8	plugins	returns the plugins. It is supported in Netscape and Firefox only.
        9	systemLanguage	returns the system language. It is supported in IE only.
        10	mimeTypes[]	returns the array of mime type. It is supported in Netscape and Firefox only.
        11	platform	returns the platform e.g. Win32.
        12	online	returns true if browser is online otherwise false.

        window.navigator  
              Or
           navigator  

*/

document.writeln("<br/>navigator.appCodeName: " + navigator.appCodeName);
document.writeln("<br/>navigator.appName: " + navigator.appName);
document.writeln("<br/>navigator.appVersion: " + navigator.appVersion);
document.writeln("<br/>navigator.cookieEnabled: " + navigator.cookieEnabled);
document.writeln("<br/>navigator.language: " + navigator.language);
document.writeln("<br/>navigator.userAgent: " + navigator.userAgent);
document.writeln("<br/>navigator.platform: " + navigator.platform);
document.writeln("<br/>navigator.onLine: " + navigator.onLine);

/*
    4.) >>>> JavaScript Screen Object <<<<<


        1	width	returns the width of the screen
        2	height	returns the height of the screen
        3	availWidth	returns the available width
        4	availHeight	returns the available height
        5	colorDepth	returns the color depth
        6	pixelDepth	returns the pixel depth.

        window.screen 
            Or
          screen  
*/
document.writeln("<br/>screen.width: " + screen.width);
document.writeln("<br/>screen.height: " + screen.height);
document.writeln("<br/>screen.availWidth: " + screen.availWidth);
document.writeln("<br/>screen.availHeight: " + screen.availHeight);
document.writeln("<br/>screen.colorDepth: " + screen.colorDepth);
document.writeln("<br/>screen.pixelDepth: " + screen.pixelDepth);

/*
    JavaScript Date Object
    1.Date()
    2.Date(milliseconds)
    3.Date(dateString)
    4.Date(year, month, day, hours, minutes, seconds, milliseconds)
*/

let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

/*
    setDate()	    It sets the day value for the specified date on the basis of local time.
    setDay()	    It sets the particular day of the week on the basis of local time.
    setFullYears()	It sets the year value for the specified date on the basis of local time.
    setHours()	    It sets the hour value for the specified date on the basis of local time.
    setMilliseconds()	It sets the millisecond value for the specified date on the basis of local time.
    setMinutes()	    It sets the minute value for the specified date on the basis of local time.
    setMonth()	        It sets the month value for the specified date on the basis of local time.
    setSeconds()	    It sets the second value for the specified date on the basis of local time.

*/

date.setHours(8);
date.setFullYear(1997);

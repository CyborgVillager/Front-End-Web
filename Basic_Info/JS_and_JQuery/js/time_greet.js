/* Variables */
let today = new Date();
let hourNow = today.getHours()
let greeting;

/* Military Time */
/* http://militarytimechart.com/ */
/* if the hour is greater than 6pm -> 18 its evening */
if (hourNow > 18) {
    greeting = 'Good evening!';
/* if the hour is greater than 12pm -> 12 its afternoon */
} else if (hourNow > 12){
    greeting = 'Good afternoon!';
/* if the hour is greater than 12am -> 0 its morning */
} else if(hourNow > 0){
    greeting = 'Good morning!';
/* if the info is not on here, just say Welcome */
} else{
    greeting = 'Welcome!'
}

document.write('<h3>' + greeting + '</h3>');
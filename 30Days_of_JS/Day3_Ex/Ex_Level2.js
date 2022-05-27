/*jshint esversion: 7 */
let b = prompt('Please enter base');
let h = prompt('Please enter height');
console.log(0.5*parseFloat(b)*parseFloat(h));

let sa=prompt('Please enter side a');
let sb=prompt('Please enter side b');
let sc=prompt('Please enter side c');
console.log(sa+sb+sc);

let length = parseFloat(prompt("Length: "));
let width  = parseFloat(prompt("Width: "));
console.log("Perimeter: ", 2 * (length + width));

console.log("Area of Circle: ", 2 * parseFloat(prompt("Radius: ")) * Math.PI);

let x_intercept = 1;
let y_intercept =-2;
let slope1 = 2;

let slope2 = (10 - 2)/(6-2);

slope2 > slope1 ? console.log("Slope2 is bigger"): console.log("slope1 is bigger");

let x = 1;
let y = x**2  + 6*x + 3**2;
if (y == 0) console.log("y = 0 at x = ", x);

x = -3;
y = x**2  + 6*x + 3**2;
if (y == 0) console.log("y = 0 at x = ", x);

let hours=parseInt(prompt("Hours:"));
let rate=parseInt(prompt("Rate: "));
console.log("Your weekly earingin is ",hours*rate);

console.log("My name is shorter than seven digits: ", "Aayush Bajaj".length < 7);

let myAge = 234;
let yourAge = 223;
console.log(`I am ${myAge - yourAge} years older than you!`);

let by = parseInt(prompt("Enter birth year"));
2022-by>18 ? console.log(`You are ${by}. You are old enough to drive`) : console.log(`You are ${by}. You will be allowed to drive after ${18-by} years.`) ;

const now= new Date();
let yr=parseInt(prompt("Enter Number of years "));
console.log("You lived", yr*3153600);

let mins = d.getMinutes();
let hrs  = d.getHours();

let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();

// Format 1
console.log(`${year}-${month + 1}-${date} ${hrs}:${mins}`);
// Format 2
console.log(`${date}-${month+1}-${year} ${hrs}:${mins}`);
// Format 3
console.log(`${date}/${month+1}/${year} ${hrs}:${mins}`);
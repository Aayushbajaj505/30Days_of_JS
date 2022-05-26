/*jshint esversion: 6 */
let firstName = "Hamza";
let lastName = "Mateen";
let country = "Pakistan";
let city = "NYC";
let age = 17;
let isMarried = false;
let year = 2020;

console.log(typeof firstName, typeof lastName,typeof country,typeof city,typeof age,typeof year);

console.log('10' == 10);

console.log(parseInt('9.8')==10);

console.log(1 < 2);
console.log("a".length > "".length);
console.log(typeof true == typeof false);

console.log(1 > 2);
console.log("a".length < "".length);
console.log(typeof true != typeof false);

console.log(true, true, false, false, true, true, false, false, false, true, false);

console.log(true, false, true, true, false, true, true, false, true, true, false);

const now = new Date();

console.log("year: " + now.getFullYear());
console.log("month: ",now.getMonth()+1);
console.log("day: "+now.getDate());
console.log("daynum: " + now.getDay());
console.log("Hours: ", now.getHours());
console.log("Mins : ", now.getMinutes());
console.log("Secs : ", Date.now());

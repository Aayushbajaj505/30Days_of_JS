/*jshint esversion: 6 */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();

console.log(ages);

console.log(ages[0],ages[ages.length - 1]);

let len = ages.length;
let median = (ages[parseInt(len/2)-1] + ages[parseInt(len/2)])/2;
const average = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/len;

console.log(average);

Math.abs(min-average) < Math.abs(max-average) ? console.log("Data is left skewed"): console.log('Data is right skewed!');

let first10Countries = countries.slice(0, 10);
console.log(first10Countries);

if (countries.length % 2 === 0){
   let firstMid = (countries.length)/2 -1;
   let secondMid = (countries.length)/2;
   console.log(countries[firstMid], countries[secondMid]);
} else console.log(countries[parseInt(countries.length/2)-1]); // Lebanon

countries.shift();

console.log(countries);
let firstHalf = countries.splice(0,countries.length/2);
let anotherHalf = countries.splice(0, countries.length);
console.log(anotherHalf);
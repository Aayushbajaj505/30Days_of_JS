/*jshint esversion: 6 */
const array = [];

const array1 = [1,2,3,4,5,6,7,8,9];

console.log(array1.length);

console.log(array1[0],array1[array1.length - 1],array1[parseInt(array1.length/2)]);

const mixedDataTypes= [true,1,2,3,"Hello",9.87];
console.log(mixedDataTypes.length);

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(itCompanies[0],itCompanies[itCompanies.length - 1],itCompanies[parseInt(itCompanies.length/2)]);
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

console.log(itCompanies[0].toString());

console.log(itCompanies.includes('IBM'));

console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));

len = itCompanies.length;
let last3Companies = itCompanies.slice(len - 3, len);
console.log("last", last3Companies);

let middle =itCompanies.slice(parseInt(len/2-1),parseInt(len/2));
console.log(middle);

console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

itCompanies.shift();
console.log(itCompanies);

itCompanies.splice(0,len);
console.log(itCompanies);
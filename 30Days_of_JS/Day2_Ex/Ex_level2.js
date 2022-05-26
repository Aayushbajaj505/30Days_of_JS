/*jshint esversion: 6 */
let quote= 'There is no exercise better for the heart than reaching down and lifting people up.';
// console.log("The quote" + ${quote} + "by John Holmes teaches us to help one another.");

console.log(`​Love is not patronizing and charity\ isn't about pity, it is about love\. Charity and love are the same\ -- with charity you give love\, so don't just give money but reach out y\ our hand instead.​`);

let a = typeof '10';
console.log(a == typeof 10);
a= typeof parseInt(a);
console.log(a == typeof 10);

let b= parseFloat('9.8');

console.log(b== 10);

b = parseInt(Math.ceil(b));
console.log(b == 10);

let onInPython = "Python".includes("on");
let onInJargon = "jargon".includes("on");
console.log("\'on\' is present in both Python and Jargon: ", onInPython == onInJargon);

let q= 'I hope this course is not full of jargon.';
console.log(q.includes('jargon'));

let rn = Math.floor(Math.random()*100);
console.log(rn);

let rn1 = Math.floor((Math.random()*51)+50);
console.log(rn1);

let rn2 = Math.floor(Math.random()*255);
console.log(rn2);

let j ='JavaScript';
console.log(j[Math.floor(Math.random()*9)]);

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

let g = 'You cannot end a sentence with because because because is a conjunction';
let becauseAll = g.substr(g.indexOf("because", 1), ("because".length * 3) +2);
console.log(becauseAll);
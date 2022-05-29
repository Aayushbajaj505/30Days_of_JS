/*jshint esversion: 6 */
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words=text.split(' ');
console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

shoppingCart.unshift('Meat');

shoppingCart.push('Sugar');
console.log(shoppingCart);

shoppingCart.splice(shoppingCart.lastIndexOf('Honey'));
console.log(shoppingCart);

if(countries.includes('Ethiopia')){
    console.log('Ethiopia');
} else countries.push('Ethiopia');

if (webTechs.indexOf("Sass")) {
    console.log("Sass is a CSS preprocess");
 } else webTechs.push("Sass");

 console.log(webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

let fullStack= frontEnd.concat(backEnd);

console.log(fullStack);
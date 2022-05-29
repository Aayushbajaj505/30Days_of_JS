/*jshint esversion: 7 */
let age = parseInt(prompt("Enter your age"));
// let age = 16;
if(age>18){
    console.log("You are old enough to drive");
}
console.log("you are left with",18-age,"years to drive");

let yourage = parseInt(prompt("Enter your age"));
let myage=21;
if(myage>yourage){
    console.log("I am",myage-yourage,"years older than me");
}
else{
    console.log("You are",yourage-myage,"years older than me"); 
}

let a = 4;
let b = 3;
a>b ? console.log(a,"is greater than",b) : console.log(b,"is greater than",a);

if(a>b){
    console.log(a,"is greater than",b) ;
}
else{
    console.log(b,"is greater than",a);
}

let num= parseInt(prompt("EnterNumber: "));
if(num%2==0){
    console.log(num,"is an even number");
}
else{
    console.log(num,"is and odd number");
}
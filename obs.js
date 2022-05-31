/*jshint esversion: 6 */
// unlimited number of parameter in functions

function summAll(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(summAll(1,2,3,4,5,6,7));


// arrow functions

const sumA = (...args) =>{
    console.log(args);
};
sumA(1,2,3,4,5,6,7);

function fullname(name){
    console.log(`Hello ${name}`);
}

fullname('Aayush Bajaj');

function solveQuad(a,b,c){
    let d= Math.pow(b,2)-4*a*c;

    posx=((-b+Math.pow(d,0.5))/(2*a));
    negx=((-b-Math.pow(d,0.5))/(2*a));

    return [posx, negx];
}
console.log(solveQuad(1,4,4));

function sdt(){
    let now = new Date();
    let year=now.getFullYear();
    let month=now.getMonth()+1;
    let date=now.getDate();
    let hours=now.getHours();
    let mins = now.getMinutes();
    console.log(`${date}/${month}/${year} ${hours}:${mins}`);
} sdt();

function reverseArray(arr){
    let revresed =[];
    for(let i=arr.length-1;i>=0;i--){
        revresed.push(arr[i]);
    }
    return revresed;
}
console.log(reverseArray([1,2,3,4,5,6]));
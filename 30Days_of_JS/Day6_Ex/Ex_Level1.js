/*jshint esversion: 7 */  
let n = 3;
for (let i = 0; i <= n; i++) {
   console.log(i);
}
// 4 make the hashes pattern
for(i = 1; i <= 7; i++) {
   console.log("#".repeat(i));
}
// 5 
for(let i = 0; i < 11; i++) {
   console.log(`${i} x ${i} = ${i*i}`);
}
// 6 
console.log("i\ti^2\ti^3");
for(let i = 0; i < 11; i++) {
   console.log(`${i}\t${i**2}\t${i**3}`);
}
// 7 
for(let i = 0; i < 101; i += 2) {
   console.log(i);
}
// 8
for (let i = 1; i < 101; i += 2) {
   console.log(i);
}
// 9 : PRIME NUMBERS
// 10 
let sum = 0;
for(let i = 0; i < 101; i++) {
   sum += i;
} console.log("Sum of 0-100: ", sum);
// 11 
let sumEven = 0;
let sumOdd  = 0;
for (let i = 0; i < 101; i++) {
   if (i%2==0) sumEven += i;
   else sumOdd += i;
} console.log(sumEven, sumOdd);
// 12 : same as above but sol should be in array format  
console.log([sumEven, sumOdd]);
// 13
let randomNums = [];
for (let i = 0; i < 5; i++) {
   randomNums.push(parseInt(Math.PI * Math.random() * 100 + 3));
}
console.log(randomNums);
// 14 Numbers mush be unique
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
   let randNum = parseInt(Math.PI * Math.random() * 100 + i);
   if(randomNumbers.indexOf(randNum) == -1) {
      randomNumbers.push(randNum);
   }
}
console.log(randomNumbers);
// 15
let alphabets = 'abcdefghijklmnopqrstuvwxyz';
let randoms = [];
for(let i = 0; i < 6; i++) {
   if(i%2 == 0) randoms.push(i);
   else randoms.push(alphabets[parseInt(Math.random() * 25)]);
}
console.log(randoms.join(''));



























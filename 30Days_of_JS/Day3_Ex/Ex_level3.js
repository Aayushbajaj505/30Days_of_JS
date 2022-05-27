/*jshint esversion: 7 */

const now = new Date();

let mins = now.getMinutes();
mins<10? '0'+mins.toString() : mins;

let hrs = now.getHours();
hrs < 10 ? '0' + hrs.toString(): hrs;

let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();

console.log(year,'-', month,'-',date,' ',hrs,":",mins);
/*jshint esversion: 7 */
function fullName() {
    console.log("Hamza Mateen");
 } fullName();
 
 
 function fullName1(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
 } fullName1("Hamza", "Mateen");
 
 
 function addNumbers(a, b) {
    return a + b;
 } console.log(addNumbers(10, 20));
 
 
 function areaOfRectangle(l, w) {
    return l*w;
 } console.log(areaOfRectangle(1,2));
 

 function perimeterOfRectangle(l, w) {
    return 2*(l+w);
 } perimeterOfRectangle(2, 34);
 
 
 function volumeOfRectPrism(l, w, h) {
    return l*w*h;
 } volumeOfRectPrism(2, 3, 4);
 
 
 function areaOfCircle(r) {
    return Math.PI * r ** 2;
 } areaOfCircle(2);
 

 function circumOfCircle(r) {
    return Math.PI * 2 * r;
 } circumOfCircle(3);
 
 
 function densityOfSubstance (m, v) {
    return m/v;
 } densityOfSubstance(23, 3);
 

 function calcSpeed(d, t) {
    return d/t;
 } 

 function calcWeight(m) {
    return Math.PI ** 2 * m;
 } 
 function celciusToFahrenheit(c) {
    return (c * (9/5)) + 32;
 } celciusToFahrenheit(37);
 

 function calcBMI(w, h) {
    return w/(h*h);
 } 
 let BMI = calcBMI(66, 1.78);
 if (BMI < 18.5) console.log("Underweight");
 else if (BMI < 24.9)   
    console.log("Normal Weight");
 else if (BMI < 29.9) {
    console.log("Overweight");
 } else {
    console.log("OBESE!");
 }
 

 function checkSeason(month) {
    let season;
    
    switch (month.toLowerCase()) {
       case "september":
       case "october":
       case "november":
          season = "Autumn";
          break;
    
       case "december":
       case "january":
       case "february":
          season = "Winter";
          break;
    
       case "march":
       case "april":
       case "may":
          season = "Spring";
          break;
    
       case "june":
       case "july":
       case "august":
          season = "Summer";
          break;
    }
    return season;
 } console.log(checkSeason("DecEMBer"));
 

 function findMax(a, b, c) {
    let max = 0;
    for(const elem of arguments) {
       if (elem > max) max = elem;
    } return max;
 } console.log(findMax(2, 34, 4));
 
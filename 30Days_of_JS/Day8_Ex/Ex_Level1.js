/*jshint esversion: 7 */
const dog = {};


console.log(dog);

dog.name = 'Barky';
dog.age  = 2;
dog.legs = 4;
dog.color= 'red';
dog.bark = () => 'Woof Woof';

console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

dog.breed = 'German shepherd';
dog.getDogInfo = () => {
   console.log(dog.name);
   console.log(dog.age);
   console.log(dog.breed);
};
dog.getDogInfo();

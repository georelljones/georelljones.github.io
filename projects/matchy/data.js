/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'lion';
animal['name'] = 'lion jones';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[noises.length] = 'Roar'; 
noises.push('Grrrr');
noises.unshift('Hmmmm');
noises[noises.length] = 'Grrreat!'; 
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal['noises'][noises.length] = 'Prrrr';
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);

console.log(animals);

var dog = {species: 'dog', name: 'Future', noises: ['whine', 'cry', 'bark', 'moan'] };
var frog = {species: 'frog', name: 'Greenie', noises: ['ribbit', 'bonk', 'hxxxmmm', 'tssss'] };
animals.push(dog);
animals.push(frog);

console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
//I chose an object so that if we later decide to add several objects of individual friends we can 

//Write a function called `getRandom` that takes our `animals` array 
//and returns the `index` of a random element using `Math.random`
function getRandom(animals) {
   var max = animals.length; //max is the length of animals
   var min = 0;                 //min is the starting point of an array which is always 0
return(Math.round(Math.random() * (max - min) + min)); //this is inclusive of min but not max. 
}
//Using a random index from this function that you just created, get a random animal 
//and add its `name` to `friends`.
friends.push(animals[getRandom(animals)]['name']);
console.log(friends);

//add `friends` as a **property** named `friends` on one of the animals in `animals`
dog.friends = friends;

//console.log` your work.
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}

/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Implement a function called `search` with a signature of `search(animals, name) { //... }` that:
function search(animals, name) {
//   - Takes a paramater representing an Array of `animals`.
//   - Takes a paramater representing a String, the name of an animal on which to perform a search.
//   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
  for(var i = 0; i <= animals.length-1; i++) {
      if (animals[i]['name'].toLowerCase() === name.toLowerCase()){
          return animals[i];
      }  
//   - Returns `null` if no animal with that name exists
  }
          return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 2 - Replace
//  Write a function called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
function replace(animals, name, replacement) {
    //search for animals for the name of the animal to replace
    for(var i = 0; i <= animals.length-1; i++) {
      if (animals[i]['name'].toLowerCase() === name.toLowerCase()){
      //replace the animal with the replacment object
          animals.splice(i, 1, replacement);
      }  
     }
//   - Otherwise do nothing.
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    //search for animals for the name of the animal to remove
    for(var i = 0; i <= animals.length-1; i++) {
      if (animals[i]['name'].toLowerCase() === name.toLowerCase()){
      //remove the animal
          animals.splice(i, 1);
      }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Write a function called `add` with a signature of `add(animals, animal) { //... }` that:
//   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//   - Checks that the animal Object has a `name` property with a length > 0.
//   - Checks that the animal Object has a `species` property with a length > 0.
//   - Has a **unique** name, meaning no other animals have that name.
//   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.

// add the animal to animals if the previous 3 conditions are true

// create a function add that takes to parameters array and object
function add(animals, animal) {
// do a check on animal to check if the length of the name string is greater than 0
// do a check on animal to check if the length of the species string is greater than 0
    if (animal['name'].length > 0 && animal['species'].length > 0){
// do a search in animals to check if there's no matching 'name'
      for(var i = 0; i <= animals.length-1; i++) {
        if (animals[i]['name'].toLowerCase() === animal['name'].toLowerCase()){
          return "This animal is exists in Animals.";
      }  
    }
      animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
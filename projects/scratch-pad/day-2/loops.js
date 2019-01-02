// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //create for loop to run through array values
  for (var i = 0; i < array.length; i++) { 
    //console log the array at position i and then increment
    console.log(array[i]); 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //create for loop to run through array values
  //start the index at the last index of the array
  //test condition until its 0
  //decrement the index
  for (var i = array.length-1; i >= 0; i--) { 
    //console log the array at position i and then increment
    console.log(array[i]); 
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //use a for in loop to print the values of an Object
  for (var key in object) {
    //logs the value stored in the objects key
    console.log(object[key]); 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
    //return array the objects keys using the Object.keys method
   return Object.keys(object); 

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
    //use a for in loop to print the keys of an Object
  for (var key in object) {
    //logs the objects keys
    console.log(key); 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //we need the number of key/value pairs so we need to count
  //its easiest to check in an array then we can use .length
  //we can get an array using Object.keys method to make the object an array
  //then check the length of that array with .length
  return Object.keys(object).length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //

var arr = []; //use a temp arr to store newly reversed object values
for (let key in object){  //use for in loop to loop over the object
arr.push(object[key]); //pust the object keys values into the new arr
}
for (let i = arr.length-1; i >=0; i--){ //start the console log at the end of the array
console.log(arr[i]); //console log the values of an object in reverse using console log

}


  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
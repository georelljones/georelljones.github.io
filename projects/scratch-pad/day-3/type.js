// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //Check for array and return true if so
    return Array.isArray(value);
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //check the object to see if its a collection not null, not an Array, and not a Date 


if (value instanceof Object && !Array.isArray(value) && value !== null && !(value instanceof Date)) {
return true; 
}
else {
    return false;
}


    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value) || value instanceof Object && value !== null && !(value instanceof Date)) {
return true; 
}
else {
    return false;
}

    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 
// expect(typeOf([])).to.equal('array');
// expect(typeOf('a')).to.equal('string');
// expect(typeOf(null)).to.equal('null');
// expect(typeOf(NaN)).to.equal('number');
// expect(typeOf(1)).to.equal('number');
// expect(typeOf(new Date())).to.equal('date');
// expect(typeOf(function () { })).to.equal('function');

function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    //check for string
    if (value instanceof Date){
        return "date";
    } else if (typeof value === "function") {
        return "function";
    } else if (value instanceof Object && !Array.isArray(value) && value !== null && !(value instanceof Date)){
        return "object";
    } else if (Array.isArray(value)){
        return "array";
    } else if (typeof value === "string" || value instanceof String){
        return "string";
    } else if  (value === undefined){
        return 'undefined';
    } else if (typeof value === "number"){
        return "number";
    } else if (typeof value === "boolean"){
        return "boolean";
    } else if (value === null){
        return "null";
    }

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}

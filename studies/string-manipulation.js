/*STRING MANIPULATION
*String manipulation can occur with operators or prototype methods.
*The string of characters can be manipulated many ways */

console.log("STRING MANIPULATION");
//1. With Operators
//We can use the + operator to add to strings together to make one 
//this is a form of concatenation 
var myStartingString = "It's not Hard.";
console.log(myStartingString);
var myStartingString2 = " It's just NEW!";

var myNewString = myStartingString + " It's just NEW!";
var myNewString2 = myStartingString + myStartingString2;
console.log(myNewString);
console.log(myNewString2); //they print the same result using concatenation operators

//2. With String Mehods:
// There are several methods that exist to manipulate strings. Some are:
// concat() - Combines the text of two or more strings and returns a new string.
// replace() – Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
// slice() - Extracts a section of a string and returns a new string.
// split() - Splits a string into an array of strings by separating the string into substrings.
// length() – The length of the string is returned as the count of the number of characters it contains.
// toLowerCase() – Converts the entire string to lower case.
// toUpperCase() – Converts the entire string to upper case.
console.log(myStartingString.concat(myStartingString2)); //an example os using a method on a string 

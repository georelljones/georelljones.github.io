/*Datatypes:
*There are primitive data types which are simple data types and there are
*complex data types. 
*/

console.log("DATATYPES:");
//1. Number are numeric values
var num = 1; 


//2. String are a collection of characters between quotes.
var string = "example";


//3.Boolean are true or false values
var boolean = 1 < 2; //returns true


//4.Arrays ie [a, b, c] are collections of values in list form separated by commas
var array = [1, 2, 3];


//5.Object ie {key: "value" pairs} are collections of key value pairs. 
var object = {
    studies: 'Tedious', 
    classwork: 'Challenging'
} 


//6.Function ie value => function => which perform actions on data and return the result
function myFunction(){ //declares the function and arguments, if any
    return 10+10;  //function expressions are the actions taken in the function
}
console.log(myFunction()); //calls the function


//7.undefined is something that has an absense of value due to being uninitialized. 
var novalue;
console.log(novalue); //returns undefined


//8.null is something that has an absense of value. 
var testNull = null;
console.log(testNull);


//9. NAN is a numeral type which means Not A Number
var testingNum = 10 / "a";
console.log(testingNum);//expected ouput NaN since a is not a number


/*10. Infinity and -Infinity
*infinity refers to positive infinity and -Infinity refers to negative infinity.*/
console.log(10/0); //returns positive Infinity
console.log(-10/0); //returns negative -Infinity




//11. What is the differendce between primitive/simple and complex data types?
/*Simple data types do not hold or collect other values. 
*Operations on simple/primitive values return primitive values and are immutable (cannot be altered). 
*While all object data types are complex data types and are mutable (can be altered). The complex data types are
*objects, Arrays and Functions. Complex data types are stored as a reference in a variable. Simple data types are 
*stored as copies of the literal value and are a singular value. Complex data types can be any size. 
*/

/*12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
*What does that mean, and how are they different? 
*Simple data types are stored as copies of the literal value. */

var original = "1234";
var byCopy = original; 
console.log (byCopy); //returns 1234 by copying the data in the original variable 

var byCopy = "12345"; //changes to the new variable will not affect the original variable
console.log (byCopy); //returns 12345
console.log (original); //returns 1234; original is not affected. 

//Complex data types are stored as a reference in a variable. 
var original = [1, 2, 3, 4];
var byReference = original; 
console.log (byReference); //returns [1, 2, 3, 4]

byReference.push(5); //changes to the complex value changes the original reference 
console.log (byReference); //returns [1, 2, 3, 4, 5]
console.log (original); //returns [1, 2, 3, 4, 5]; original reference is changed.

//this is also true for functions
function byReferenceFunction(arg) {
   return arg + 1;
}

var numRef = 1;
console.log(byReferenceFunction(2)); 
//returns 2; the result of the reference's action on the variable num

console.log(numRef); 
//returns 1; the original value of num bc its only a copy with no action outside of the function


